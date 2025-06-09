class HomePage {
    constructor(page) {
        this.page = page;     

        this.locators = {
        consentCookiesButton: this.page.getByRole('button', { name: 'Consent' }),
        agreeCookiesButton: this.page.getByRole('button', { name: 'I agree' })
        }
    };


    async loadHomePage() {
        await this.page.goto("/");
    }

    
    async handleCookies() {
        if (await this.locators.consentCookiesButton.isVisible()) {
        await this.locators.consentCookiesButton.click();
        } else if (await this.locators.agreeCookiesButton.isVisible()) {
        await this.locators.agreeCookiesButton.click();
        }
    }
}


export default HomePage; 