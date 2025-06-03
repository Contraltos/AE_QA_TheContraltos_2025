import { test, expect } from "@playwright/test";
import ContactUsPage from '../POM/pageObjects/contactUsPage';

test.describe("Automation Exercise Website Tests", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("should verify home page navigation link color", async ({ page }) => {
        const locator = page.getByText("Home");
        await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
    });

    test("should successfully submit contact form", async ({ page }) => {
        const contactPage = new ContactUsPage(page);
        
        await page.getByText("Contact us").click();
        await contactPage.submitContactForm(
            "my name",
            "myemail@email.com",
            "here is my message"
        );

        const successMessage = contactPage.locators.getSuccessSubmissionMessage();
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toHaveText(
            "Success! Your details have been submitted successfully."
        );
    });

    test("should display correct product categories", async ({ page }) => {
        const expectedCategories = ["WOMEN", "MEN", "KIDS"];

        await page.getByText("Products").click();
        const categories = await page.locator("[data-parent='#accordian']").allInnerTexts();

        expect(categories).toEqual(expectedCategories);
    });
});
