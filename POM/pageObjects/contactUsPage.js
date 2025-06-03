import BasePage from './basePage';

class ContactUsPage extends BasePage {
    constructor(page) {
        super(page);
    }

    locators = {
        getInputFieldName: () => this.page.getByPlaceholder("Name"),
        getInputFieldEmail: () => this.page.locator("input[data-qa='email']"),
        getInputFieldMessage: () => this.page.locator("#message"),
        getSubmitButton: () => this.page.locator("input[data-qa='submit-button']"),
        getSuccessSubmissionMessage: () => this.page.locator(".contact-form .status")
    }

    async fillNameField(name) {
        await this.locators.getInputFieldName().fill(name);
        return this;
    }

    async fillEmailField(email) {
        await this.locators.getInputFieldEmail().fill(email);
        return this;
    }

    async fillMessageField(message) {
        await this.locators.getInputFieldMessage().fill(message);
        return this;
    }
    
    async acceptConfirmationPopup() {
        this.page.on("dialog", async (alert) => await alert.accept());
        return this;
    }

    async clickSubmitButton() {
        await this.locators.getSubmitButton().click();
        return this;
    }

    async submitContactForm(name, email, message) {
        return this
            .fillNameField(name)
            .fillEmailField(email)
            .fillMessageField(message)
            .acceptConfirmationPopup()
            .clickSubmitButton();
    }
}

export default ContactUsPage;