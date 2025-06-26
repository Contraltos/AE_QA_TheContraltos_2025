class CartPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            getQuantityButton: () => this.page.locator('td.cart_quantity button.disabled'),
            getProduct: () => this.page.locator('#product-1')
        }; 
    }

    async verifyProductQuantity() {
        const quantityText = await this.locators.getQuantityButton().textContent();
        return Number(quantityText);

    }   

    
}
export default CartPage;