import { expect } from '@playwright/test';
import { test } from "../helpers/fixtures";

test.describe('add products to cart test', () => {

    test('TC_012_01_Verify add products to cart process', async ({ header, productsPage }) => {
        await header.clickProductsLink();
        await productsPage.addProductToCartByIndex(0);
        await productsPage.continueShopping();
        await productsPage.addProductToCartByIndex(1);
        await productsPage.viewCart();

        const cartItems = await productsPage.getCartItems();
        console.log('cartItems:', cartItems);
        expect(cartItems.length).toBe(2);

        for (const item of cartItems) {
            expect(item.price).toMatch(/\d+/);
            expect(item.quantity).toMatch(/\d+/);
            expect(item.total).toMatch(/\d+/);
        }
    });
});