import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';
import Header from '../pageObjects/header';
import ProductsPage from '../pageObjects/productsPage';

test.describe('search products test', () => {

    test('verify search field on the product page', async ({ header, productsPage }) => {
        await header.clickProductsLink(); 
        await productsPage.searchProduct('dress');

        const searchedTitle = await productsPage.shouldSearchedProductsVisible();
        expect(searchedTitle).toMatch(/Searched Products/i);

        const count = await productsPage.getSearchResultsCount();
        expect(count).toBeGreaterThan(0);
    });
});