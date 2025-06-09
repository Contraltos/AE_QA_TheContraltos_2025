import ContactUsPage from "./contactUsPage.js";
import ProductsPage from "./productsPage.js";
import SignupLoginPage from "./signupLoginPage.js";

class Header {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getHomePageLink: () => this.page.getByText("Home"),
        getProductsLink: () => this.page.getByText("Products"),
        getContactUsLink: () => this.page.getByText("Contact us"),
        getSignupLoginLink: () => this.page.getByRole('link', { name: ' Signup / Login' })
    };

    async clickContactUsLink() {
        await this.locators.getContactUsLink().click();
        return new ContactUsPage(this.page);
    }

    async clickProductsLink() {
        await this.locators.getProductsLink().click();
        return new ProductsPage(this.page);
    }

      async clickSignupLoginLink() {
        await this.locators.getSignupLoginLink().click();
        return new SignupLoginPage(this.page);
    }
}


export default Header;