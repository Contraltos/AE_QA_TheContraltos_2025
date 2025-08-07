import { test } from "../helpers/fixtures.js";
import { expect } from "@playwright/test";
import { signupLoginPageData } from "../helpers/testData.js";

test.describe("Simple Signup Test", () => {
    test("TC_003_01_Verify email exists error", async ({ homePage, header }) => {
        await homePage.verifyHomePageVisible();
        const signupLoginPage = await header.clickSignupLoginLink();
        await signupLoginPage.verifyNewUserSignupVisible();
        await signupLoginPage.fillSignupName(signupLoginPageData.signupName);
        await signupLoginPage.fillSignupEmail(signupLoginPageData.existingEmail);
        await signupLoginPage.clickSignupButton();
        await signupLoginPage.verifyEmailExistsError();
        await expect(signupLoginPage.locators.getEmailExistsError()).toBeVisible();
    });
});
