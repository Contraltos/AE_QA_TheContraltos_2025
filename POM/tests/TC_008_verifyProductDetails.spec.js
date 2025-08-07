import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";

test.describe("TC_008_01 - Verify Product Details", () => {
    test("Verify All Products and Product Detail Page", async ({ page, homePage, header, productsPage, productDetailsPage }) => {
        await header.clickProductsLink();
        await expect(productsPage.page.locator('h2.title.text-center')).toContainText('All Products');
        await productsPage.clickViewProductOfFirstProduct();
        await expect(productDetailsPage.locators.getProductInfoBlock()).toBeVisible();
        await productDetailsPage.verifyAllProductDetailsVisible();
    });
});
