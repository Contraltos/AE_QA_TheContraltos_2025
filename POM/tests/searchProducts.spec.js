import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';

    test('TC_009_01, TC_020_01 - Verify search field on the product page', async ({ header, productsPage, productDetailsPage }) => {
        await header.clickProductsLink(); 
        await productsPage.searchProduct('dress');

        const searchedTitle = await productsPage.shouldSearchedProductsVisible();
        expect(searchedTitle).toMatch(/Searched Products/i);

        const count = await productsPage.getSearchResultsCount();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
            await productsPage.openProductByIndex(i);
            const name = await productDetailsPage.getTitle();
            const category = await productDetailsPage.getCategory();

            expect(name.includes('Dress') || category.includes('Dress')).toBeTruthy();

            await page.goBack();
        }

    });

    

    

