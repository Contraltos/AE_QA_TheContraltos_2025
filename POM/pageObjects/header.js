import ContactUsPage from "./contactUsPage.js";
import ProductsPage from "./productsPage.js";

class Header {
    constructor(page) {
        this.page = page;
    }

    locators = {
        getHomePageLink: () => this.page.getByText("Home"),
        getProductsLink: () => this.page.getByText("Products"),
        getContactUsLink: () => this.page.getByText("Contact us")
    };

    async clickContactUsLink() {
        await this.locators.getContactUsLink().click();
        return new ContactUsPage(this.page);
    }

    async clickProductsLink() {
        await this.locators.getProductsLink().click();
        return new ProductsPage(this.page);
    }
}


export default Header;