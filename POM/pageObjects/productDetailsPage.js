import { expect } from '@playwright/test';

class ProductDetailsPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            getProductInfoBlock: () => this.page.locator('.product-information'),
            getProductName: () => this.page.locator('.product-information h2'),
            getProductCategory: () => this.page.locator('.product-information p').filter({ hasText: 'Category:' }),
            getProductPrice: () => this.page.locator('.product-information span span'),
            getProductAvailability: () => this.page.locator('.product-information p').filter({ hasText: 'Availability:' }),
            getProductCondition: () => this.page.locator('.product-information p').filter({ hasText: 'Condition:' }),
            getProductBrand: () => this.page.locator('.product-information p').filter({ hasText: 'Brand:' }),
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

    async getProductName() {
        return await this.locators.getProductName().textContent();
    }

    async getProductCategory() {
        const categoryText = await this.locators.getProductCategory().textContent();
        return categoryText ? categoryText.replace('Category: ', '').trim() : '';
    }

    async getProductPrice() {
        return await this.locators.getProductPrice().textContent();
    }

    async getProductAvailability() {
        const availabilityText = await this.locators.getProductAvailability().textContent();
        return availabilityText ? availabilityText.replace('Availability: ', '').trim() : '';
    }

    async getProductCondition() {
        const conditionText = await this.locators.getProductCondition().textContent();
        return conditionText ? conditionText.replace('Condition: ', '').trim() : '';
    }

    async getProductBrand() {
        const brandText = await this.locators.getProductBrand().textContent();
        return brandText ? brandText.replace('Brand: ', '').trim() : '';
    }

    async isProductInfoVisible() {
        return await this.locators.getProductInfoBlock().isVisible();
    }

    async extractAllProductDetails() {
        const [productName, price] = await Promise.all([
            this.getProductName(),
            this.getProductPrice()
        ]);

        const optionalFields = await Promise.allSettled([
            this.getProductCategory(),
            this.getProductAvailability(), 
            this.getProductCondition(),
            this.getProductBrand()
        ]);
        
        const [category, availability, condition, brand] = optionalFields.map(
            result => result.status === 'fulfilled' ? result.value : 'Not available'
        );

        return { productName, price, category, availability, condition, brand };
    }

    async verifyAndNavigateToProductDetails() {
        await expect(this.page).toHaveURL(/.*product_details/);
        await expect(this.locators.getProductInfoBlock()).toBeVisible();
    }

    // async verifyRelationToSearch() {
    //     await this.locators.getProductInfoBlock().
    // }
}

export default ProductDetailsPage;