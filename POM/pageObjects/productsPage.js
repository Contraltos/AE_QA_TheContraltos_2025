class ProductsPage {
    constructor(page) {
        this.page = page;

        this.locators = {
        getCategories: () => this.page.locator("[data-parent='#accordian']"),
        getSearchInput: () => this.page.locator('#search_product'),
        getSearchButton: () => this.page.locator('#submit_search'),
        getSearchedProductsTitle:() => this.page.locator('h2.title.text-center'),
        getAnyProduct: () => this.page.locator('.productinfo.text-center'),
        getProductCards: () => this.page.locator('.product-image-wrapper'),
        getAddToCartButtons: () => this.page.locator('a.add-to-cart'),
        getContinueShoppingButton: () => this.page.locator('[data-dismiss="modal"]'),
        getViewCartButton:() => this.page.locator('div.modal-content a', { hasText: 'View Cart' }),
        getCartItems: () => this.page.locator('.cart_info tbody tr'),
        }
    }
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

    async addProductToCartByIndex(index) {
        const card = this.locators.getProductCards().nth(index);
        await card.hover();
        await card.locator('.overlay-content a.add-to-cart').click();
    }

    async continueShopping() {
        await this.locators.getContinueShoppingButton().click();
    }

    async viewCart() {
        await this.locators.getViewCartButton().click();
    }

    async getCartItems() {
        // Находим все строки товаров в корзине
        const rows = await this.page.$$('#cart_info_table tbody tr');
        if (!rows) return [];
        return Promise.all(rows.map(async row => {
            // Получаем текст из нужных ячеек
            const price = await row.$eval('.cart_price p', el => el.textContent.trim()).catch(() => '');
            const quantity = await row.$eval('.cart_quantity button', el => el.textContent.trim()).catch(() => '');
            const total = await row.$eval('.cart_total_price', el => el.textContent.trim()).catch(() => '');
            return { price, quantity, total };
        }));
    }
}

export default ProductsPage;