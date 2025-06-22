import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';
import { signupLoginPageData } from "../helpers/testData";

test.describe("Log in /Log out", () => {

        test("TC_002_01 - Verify log in with correct credentials", async  ({signupLoginPage}) => { 
                await signupLoginPage.fillEmail(signupLoginPageData.email);
                await signupLoginPage.fillPassword(signupLoginPageData.password);
                await signupLoginPage.clickLoginButton();
                await expect(signupLoginPage.locators.getLoggedInText(signupLoginPageData.username))
                .toBeVisible();
        });

        test("TC_003_01 - Login User with incorrect email and password", async  ({signupLoginPage}) => { 
                await signupLoginPage.fillEmail(signupLoginPageData.incorrectEmail);
                await signupLoginPage.fillPassword(signupLoginPageData.incorrectPassword);
                await signupLoginPage.clickLoginButton();
                await expect (signupLoginPage.locators.getErrorMessage()).toBeVisible();
                
        });
});   