import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import { contactUsData } from "../helpers/testData";

test.describe("Contact us page", () => {

    test("TC_006_01 - Verify contact us form submission", async ({ header, contactUsPage, homePage }) => {
        await header.clickContactUsLink();  

        await contactUsPage.fillNameField(contactUsData.name);  
        await contactUsPage.fillEmailField(contactUsData.email);
        await contactUsPage.fillMessageField(contactUsData.message);
        await contactUsPage.acceptConfirmationPopup();
        await contactUsPage.clickSubmitButton(); 

        const divText = contactUsPage.locators.getSuccessSubmissionMessage(); 
        await divText.waitFor({ state: 'visible' });
        await expect(divText).toBeVisible();
        await expect(divText).toHaveText(contactUsData.successSubmissionMessage);
        await header.clickHomeLink();
        await homePage.verifyHomePageVisible();
    });
});