import {test} from "../helpers/fixtures";
import { expect } from "@playwright/test";


     
    test('TC_013_01 - Verify product quantity in cart', async ({homePage, page, productDetailsPage, cartPage }) => {
        await homePage.clickViewProductLink();
        await expect(page).toHaveURL(/.*\/product_details\/1/);
        await expect(productDetailsPage.locators.getProductInfoBlock()).toBeVisible();
        await productDetailsPage.fillQuantity(4);
        await productDetailsPage.clickAddToCartButton();
        await productDetailsPage.clickViewCartLink();
        await expect(cartPage.locators.getProduct()).toBeVisible();
        const quantity = await cartPage.verifyProductQuantity();
        expect(quantity).toBe(4);
    });
