import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;
      
        this.locators = {
            consentCookiesButton: page.getByRole('button', { name: 'Consent' }),
            agreeCookiesButton: page.getByRole('button', { name: 'I agree' }),
            homePageText: page.getByText("Full-Fledged practice website for Automation Engineers").first(),
            testCasesLink: page.getByRole('link', { name: 'Test Cases', exact: true }),
            footer: page.locator('footer'),
            subscriptionText: page.locator('footer').getByText('SUBSCRIPTION'),
            emailInput: page.locator('input[type="email"]'),
            subscribeButton: page.locator('button#subscribe'),
            successAlert: page.locator('.alert-success'),
            getViewProductLink: this.page.getByRole('link', { name: 'View Product' }).first()
        }
    };

    async loadHomePage() {
        await this.page.goto('/');
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

    async verifyHomePageText() {
        await expect(this.locators.homePageText).toHaveCSS("color", "rgb(54, 52, 50)");
        await expect(this.locators.homePageText).toBeVisible();
    }

    async clickTestCasesLink() {
        await this.locators.testCasesLink.click();
    }

     async clickViewProductLink() {
        await this.locators.getViewProductLink.click();
    }
}

export default HomePage;