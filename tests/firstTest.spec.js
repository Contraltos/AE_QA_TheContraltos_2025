import { test, expect } from "@playwright/test";

test.describe("first test suite", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    });

    test("verify home page", async  ({ page }) => { 
        //it()
        // const locator = page.locator(".navbar-nav a[href='/']");
        const locator = page.getByText("Home"); 

        await expect(locator).toHaveCSS("color", "rgb(255, 165, 0)");
    });

    test("verify contact us form submission", async ({ page }) => {
        await page.getByText("Contact us").click();

        await page.getByPlaceholder("Name").fill("my name"); 
        await page.locator("input[data-qa='email']").fill("myemail@email.com");
        await page.locator("#message").fill("here is my message");

        page.on("dialog", async (alert) => await alert.accept());
        await page.locator("input[data-qa='submit-button']").click();  //диалоговое окно 

        const divText = page.locator(".contact-form .status") 
        await expect(divText).toBeVisible();
        await expect(divText).toHaveText(
            "Success! Your details have been submitted successfully."  //результат ответа 
        );
    });

    test("verify categories on products page", async ({ page }) => {
        const result = ["WOMEN", "MEN", "KIDS"];

        await page.getByText("Products").click();

        const data = await page.locator("[data-parent='#accordian']").allInnerTexts(); 

        expect(data).toEqual(result);
     });   
});
