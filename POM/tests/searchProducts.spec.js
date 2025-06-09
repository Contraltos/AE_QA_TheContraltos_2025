import { test, expect } from '@playwright/test';
import HomePage from '../pageObjects/homePage';
import Header from '../pageObjects/header';
import ProductsPage from '../pageObjects/productsPage';

test.describe('search products test', () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test('verify search field on the product page', async ({ page }) => {
        const header = new Header(page);
        await header.clickProductsLink(); 

        const productsPage = new ProductsPage(page);
        await productsPage.searchProduct('dress');

        const searchedTitle = await productsPage.shouldSearchedProductsVisible();
        expect(searchedTitle).toMatch(/Searched Products/i);

        const count = await productsPage.getSearchResultsCount();
        expect(count).toBeGreaterThan(0);
    });
});