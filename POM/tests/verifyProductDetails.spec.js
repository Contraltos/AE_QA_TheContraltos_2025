import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";

test.describe("TC_008_01 - Verify Product Details", () => {
    test("Verify All Products and Product Detail Page", async ({ homePage, header, productsPage, productDetailsPage }) => {
        await homePage.verifyHomePageVisible();
        await header.clickProductsLink();
        const productsCount = await productsPage.verifyProductsPageAndCount();
        console.log(`Found ${productsCount} products on the page`);
        await productsPage.clickViewProductOfFirstProduct();
        await productDetailsPage.verifyAndNavigateToProductDetails();
        const productDetails = await productDetailsPage.extractAllProductDetails();
        expect(productDetails.productName?.trim()).toBeTruthy();
        expect(productDetails.price?.trim()).toBeTruthy();
        console.log(`Product: ${productDetails.productName} | Price: ${productDetails.price} | Category: ${productDetails.category} | Availability: ${productDetails.availability} | Condition: ${productDetails.condition} | Brand: ${productDetails.brand}`);
    });
});
