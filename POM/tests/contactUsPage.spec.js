import { test } from "../helpers/fixtures";
import { expect } from "@playwright/test";
import Header from "../pageObjects/header";
import ContactUsPage from "../pageObjects/contactUsPage";
import { contactUsData } from "../helpers/testData";

test.describe("contact us page test", () => {

    test("verify contact us form submission", async ({ page }) => {
        const header = new Header(page);  //загрузка домашней страницы
        header.clickContactUsLink();  //переход на страницу Contact us

        const contactUsPage = new ContactUsPage(page);
        await contactUsPage.fillNameField(contactUsData.name);  //заполнение формы
        await contactUsPage.fillEmailField(contactUsData.email);
        await contactUsPage.fillMessageField(contactUsData.message);
        await contactUsPage.acceptConfirmationPopup();
        await contactUsPage.clickSubmitButton();  //отправка формы

        const divText = contactUsPage.locators.getSuccessSubmissionMessage();  //проверка ответа
        await expect(divText).toBeVisible();
        await expect(divText).toHaveText(contactUsData.successSubmissionMessage);
    });
});