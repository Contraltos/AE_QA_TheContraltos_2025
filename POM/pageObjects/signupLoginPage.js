import { get } from "http";

class SignupLoginPage {
    constructor(page) {
        this.page = page;

        this.locators = {
        getEmailField: () => this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address'),
        getPasswordField: () => this.page.getByRole('textbox', { name: 'Password' }),
        getLoginButton: () => this.page.getByRole('button', { name: 'Login' }),
        getLoggedInText: (username) => this.page.getByText(`Logged in as ${username}`),
        getErrorMessage: () => this.page.getByText('Your email or password is incorrect!'),
        getLogoutButton: () => this.page.getByRole('link', { name: ' Logout' }),

        getNewUserSignupText: () => this.page.getByText('New User Signup!'),
        getSignupNameField: () => this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Name'),
        getSignupEmailField: () => this.page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address'),
        getSignupButton: () => this.page.getByRole('button', { name: 'Signup' }),
        getEmailExistsError: () => this.page.getByText('Email Address already exist!')
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

    async clickLogoutButton(){
        await this.locators.getLogoutButton().click();
        return this;
    }

    async verifyNewUserSignupVisible(){
        await this.locators.getNewUserSignupText().waitFor({ state: 'visible' });
        return this;
    }

    async fillSignupName(name){
        await this.locators.getSignupNameField().fill(name);
        return this;
    }

    async fillSignupEmail(email){
        await this.locators.getSignupEmailField().fill(email);
        return this;
    }

    async clickSignupButton(){
        await this.locators.getSignupButton().click();
        return this;
    }

    async verifyEmailExistsError(){
        await this.locators.getEmailExistsError().waitFor({ state: 'visible' });
        return this;
    }

}

export default SignupLoginPage;