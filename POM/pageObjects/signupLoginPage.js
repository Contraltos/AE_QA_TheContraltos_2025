class SignupLoginPage {
    constructor(page) {
        this.page = page;

        this.locators = {
        getEmailField: () => this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address'),
        getPasswordField: () => this.page.getByRole('textbox', { name: 'Password' }),
        getLoginButton: () => this.page.getByRole('button', { name: 'Login' }),
        getLoggedInText: (username) => this.page.getByText(`Logged in as ${username}`),
        getErrorMessage: () => this.page.getByText('Your email or password is incorrect!'),
        }
    }

    async fillEmail (email){
        await this.locators.getEmailField().fill(email);
        return this;
    }
    async fillPassword (password){
        await this.locators.getPasswordField().fill(password);
        return this;
    }

    async clickLoginButton(){
        await this.locators.getLoginButton().click();
        return this;
    }

}

export default SignupLoginPage;