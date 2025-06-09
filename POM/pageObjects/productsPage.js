class ProductsPage {
    constructor(page) {
        this.page = page;       
    }

    locators = {
    getCategories: () => this.page.locator("[data-parent='#accordian']"),
    getSearchInput: () => this.page.locator('#search_product'),
    getSearchButton: () => this.page.locator('#submit_search'),
    getSearchedProductsTitle: () => this.page.locator('h2.title.text-center'),
    getAnyProduct: () => this.page.locator('.productinfo.text-center')
};

    async getCategoriesText() {
        return await this.locators.getCategories().allInnerTexts();
    }

    async searchProduct(productName) {
        await this.locators.getSearchInput().fill(productName);
        await this.locators.getSearchButton().click();
    }

    async shouldSearchedProductsVisible() {
        return await this.locators.getSearchedProductsTitle().textContent();
    }

    async getSearchResultsCount() {
        return await this.locators.getAnyProduct().count();
    }
}

export default ProductsPage;