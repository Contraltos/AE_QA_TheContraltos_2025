import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/homePage';
import Header from '../pageObjects/header';
import ProductsPage from '../pageObjects/productsPage';

test.describe('add products to cart test', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('verify add products to cart process', async ({ page }) => {
        const header = new Header(page);
        await header.clickProductsLink();

        const productsPage = new ProductsPage(page);
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