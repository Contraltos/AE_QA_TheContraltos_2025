import { test } from "../helpers/fixtures.js";
import { expect } from "@playwright/test";
import { signupLoginPageData } from "../helpers/testData.js";

test.describe("Signup with existing email tests", () => {

    test("TC_005_01 - Verify error when signing up with already registered email address", async ({ homePage, header }) => {
        await homePage.verifyHomePageVisible();
        const signupLoginPage = await header.clickSignupLoginLink();
        await signupLoginPage.verifyNewUserSignupVisible();
        await signupLoginPage.fillSignupName(signupLoginPageData.signupName);
        await signupLoginPage.fillSignupEmail(signupLoginPageData.existingEmail);
        await signupLoginPage.clickSignupButton();
        await signupLoginPage.verifyEmailExistsError();
        await expect(signupLoginPage.locators.getEmailExistsError()).toBeVisible();
        await expect(signupLoginPage.locators.getEmailExistsError()).toHaveText('Email Address already exist!');
    });
});
