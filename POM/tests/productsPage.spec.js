import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/homePage";
import Header from "../pageObjects/header";
import ProductsPage from "../pageObjects/productsPage";
import { arrCategories } from "../helpers/testData";

test.describe("products page test", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
    });

    test("verify product categories", async  ({ page }) => { 
        const header = new Header(page); 
        await header.clickProductsLink();  // переход на страницу Products

        const productsPage = new ProductsPage(page)
        const data = await productsPage.getCategoriesText();

        expect(data).toEqual(arrCategories);
     });   
});