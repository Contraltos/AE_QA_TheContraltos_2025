import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/homePage";
import Header from "../pageObjects/header";
import SignupLoginPage from "../pageObjects/signupLoginPage";
import { signupLoginPageData } from "../helpers/testData";

test.describe("Log in", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
        await homePage.handleCookies();
    });

    test("TC_002_01 - Verify log in with correct credentials", async  ({ page }) => { 
        const header = new Header(page);
        await header.clickSignupLoginLink();
        const signupLoginPage = new SignupLoginPage(page)
        await signupLoginPage.fillEmail(signupLoginPageData.email);
        await signupLoginPage.fillPassword(signupLoginPageData.password);
        await signupLoginPage.clickLoginButton();
        await expect(signupLoginPage.locators.getLoggedInText(signupLoginPageData.username))
        .toBeVisible();

    });   
});