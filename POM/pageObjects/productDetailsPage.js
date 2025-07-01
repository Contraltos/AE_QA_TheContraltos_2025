import { get } from "http";

class ProductDetailsPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            getProductInfoBlock: () => this.page.locator('.product-information'),
            getQuantityInput: () => this.page.locator('input[name="quantity"]'),
            getAddToCartButton: () => this.page.getByRole('button', { name: 'Add to cart' }),
            getViewCartLink: () => this.page.getByRole('link', { name: 'View Cart' })
        };
    }

    async fillQuantity(quantity) {
        await this.locators.getQuantityInput().fill(String(quantity));
        return this;
    }

    async clickAddToCartButton() {
        await this.locators.getAddToCartButton().click();
        return this;
    }

    async clickViewCartLink() {
        await this.locators.getViewCartLink().click();
        return this;
    }
}

export default ProductDetailsPage;