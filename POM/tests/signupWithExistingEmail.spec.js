import { test } from "../helpers/fixtures.js";
import { expect } from "@playwright/test";
import { signupLoginPageData } from "../helpers/testData.js";

test.describe("Signup with existing email tests", () => {

    test("TC_005_01 - Verify error when signing up with already registered email address", async ({ homePage, header }) => {
        // Step 1: Launch browser - handled by fixtures
        // Step 2: Navigate to url 'http://automationexercise.com' - handled by homePage fixture
        
        // Step 3: Verify that home page is visible successfully
        await homePage.verifyHomePageVisible();
        
        // Step 4: Click on 'Signup / Login' button
        const signupLoginPage = await header.clickSignupLoginLink();

        // Step 5: Verify 'New User Signup!' is visible
        await signupLoginPage.verifyNewUserSignupVisible();
        
        // Step 6: Enter name and already registered email address
        await signupLoginPage.fillSignupName(signupLoginPageData.signupName);
        await signupLoginPage.fillSignupEmail(signupLoginPageData.existingEmail);
        
        // Step 7: Click 'Signup' button
        await signupLoginPage.clickSignupButton();
        
        // Step 8: Verify error 'Email Address already exist!' is visible
        await signupLoginPage.verifyEmailExistsError();

        // Additional assertion to ensure the error message is correct
        await expect(signupLoginPage.locators.getEmailExistsError()).toBeVisible();
        await expect(signupLoginPage.locators.getEmailExistsError()).toHaveText('Email Address already exist!');
    });
});
