import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import Header from "../pageObjects/header";
import ProductsPage from "../pageObjects/productsPage";
import { arrCategories } from "../helpers/testData";

test.describe("products page test", () => {

    test("verify product categories", async ({ header, productsPage }) => { 
        await header.clickProductsLink();
        const data = await productsPage.getCategoriesText();
        expect(data).toEqual(arrCategories);
    });   
});