class HomePage {
    constructor(page) {
        this.page = page;
        this.locators = {
            footer: page.locator('footer'),
            subscriptionText: page.locator('footer').getByText('SUBSCRIPTION'),
            emailInput: page.locator('input[type="email"]'),
            subscribeButton: page.locator('button#subscribe'),
            successAlert: page.locator('.alert-success'),
            consentCookiesButton: page.getByRole('button', { name: 'Consent' }),
            agreeCookiesButton: page.getByRole('button', { name: 'I agree' })
        };
    }

    async loadHomePage() {
        await this.page.goto('http://automationexercise.com');
    }

    async handleCookies() {
        if (await this.locators.consentCookiesButton.isVisible()) {
            await this.locators.consentCookiesButton.click();
        } else if (await this.locators.agreeCookiesButton.isVisible()) {
            await this.locators.agreeCookiesButton.click();
        }
    }

    async verifyHomePageVisible() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForSelector('body', { state: 'visible' });
    }

    async scrollToFooter() {
        await this.locators.footer.scrollIntoViewIfNeeded();
    }

    async verifySubscriptionText() {
        await this.locators.subscriptionText.waitFor({ state: 'visible' });
    }

    async subscribeWithEmail(email) {
        await this.locators.emailInput.fill(email);
        await this.locators.subscribeButton.click();
    }

    async verifySuccessMessage() {
        await this.locators.successAlert.waitFor({ state: 'visible' });
        await this.page.waitForSelector('.alert-success:has-text("You have been successfully subscribed!")');
    }
}


export default HomePage;