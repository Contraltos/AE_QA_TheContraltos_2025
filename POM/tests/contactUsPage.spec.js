import { test, expect } from "@playwright/test";
import HomePage from "../pageObjects/homePage";
import Header from "../pageObjects/header";
import ContactUsPage from "../pageObjects/contactUsPage";
import { contactUsData } from "../helpers/testData";

test.describe("contact us page test", () => {
    test.beforeEach(async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.loadHomePage();
        await homePage.handleCookies();
    });

    test("verify contact us form submission", async ({ page }) => {
        const header = new Header(page);  //загрузка домашней страницы
        header.clickContactUsLink();  //переход на страницу Contact us

        const contactUsPage = new ContactUsPage(page);
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