import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import Header from "../pageObjects/header";
import ContactUsPage from "../pageObjects/contactUsPage";
import { contactUsData } from "../helpers/testData";

test.describe("contact us page test", () => {

    test("verify contact us form submission", async ({ header, contactUsPage }) => {
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
    });
});