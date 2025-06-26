import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import { contactUsData } from "../helpers/testData";
import HomePage from "../pageObjects/homePage";

test.describe("Contact us page", () => {

    test("TC_006_01 - Verify contact us form submission", async ({ header, contactUsPage, homePage }) => {
        await header.clickContactUsLink();  //переход на страницу Contact us

        await contactUsPage.fillNameField(contactUsData.name);  //заполнение формы
        await contactUsPage.fillEmailField(contactUsData.email);
        await contactUsPage.fillMessageField(contactUsData.message);
        await contactUsPage.acceptConfirmationPopup();
        await contactUsPage.clickSubmitButton();  //отправка формы

        const divText = contactUsPage.locators.getSuccessSubmissionMessage(); 
        await divText.waitFor({ state: 'visible' }); // ждём появления локатора
        await expect(divText).toBeVisible();
        await expect(divText).toHaveText(contactUsData.successSubmissionMessage);
        await header.clickHomeLink();
        await homePage.verifyHomePageVisible();
    });
});