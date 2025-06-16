import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import Header from "../pageObjects/header";

test.describe("homepage test", () => {

    test("verify home page", async  ({ page }) => { 
        const header = new Header(page); 

        const locator = header.locators.getHomePageLink();
        await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
    });
});