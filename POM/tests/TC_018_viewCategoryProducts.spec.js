import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";

test.describe("TC_01.018.01 - View Category Products", () => {
    test("Verify that categories navigate to product pages", async ({ page, homePage, categoriesPage }) => {
        await categoriesPage.verifyCategoriesVisible();
        await categoriesPage.clickWomenCategory();
        await categoriesPage.clickWomenDressSubcategory();
        await categoriesPage.verifyWomenDressPage();
        await expect(page.locator('.features_items')).toBeVisible();
        await categoriesPage.clickMenCategory();
        await categoriesPage.clickMenTshirtsSubcategory();
        await categoriesPage.verifyMenTshirtsPage();
        await expect(page.locator('.features_items')).toBeVisible(); 
    });
});