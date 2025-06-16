import { expect } from '@playwright/test';

class HomePage {
    constructor(page) {
        this.page = page;     

        this.locators = {
        consentCookiesButton: this.page.getByRole('button', { name: 'Consent' }),
        agreeCookiesButton: this.page.getByRole('button', { name: 'I agree' }),
        homePageText: page.getByText("Full-Fledged practice website for Automation Engineers").first(),
        testCasesLink: page.getByRole('link', { name: 'Test Cases', exact: true })
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

    async verifyHomePageText() {
        await expect(this.locators.homePageText).toHaveCSS("color", "rgb(54, 52, 50)");
        await expect(this.locators.homePageText).toBeVisible();
    }

    async clickTestCasesLink() {
        await this.locators.testCasesLink.click();
    }
}

export default HomePage; 