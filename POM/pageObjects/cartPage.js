class CartPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            getQuantityButton: () => this.page.locator('td.cart_quantity button.disabled'),
            getProduct: () => this.page.locator('#product-1'),
            proceedToCheckout: () => this.page.getByRole('link', { name: 'Proceed To Checkout' })
        }; 
    }

    async verifyProductQuantity() {
        const quantityText = await this.locators.getQuantityButton().textContent();
        return Number(quantityText);
    }   

    async verifyCartPageDisplayed() {
        await this.page.waitForURL(/.*cart/);
    }

    async proceedToCheckout() {
        await this.locators.proceedToCheckout().click();
    }
}
export default CartPage;