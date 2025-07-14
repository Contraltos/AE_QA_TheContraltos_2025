import { expect } from "@playwright/test";
import { test } from "../helpers/fixtures";

test.describe("Verify subscription on home page", () => {
    test("Should subscribe successfully from homepage footer", async ({ homePage }) => {

        await homePage.scrollToFooter();
        await homePage.verifySubscriptionText();
        await homePage.subscribeWithEmail('testemail@example.com');
        await homePage.verifySuccessMessage();
        expect("You have been successfully subscribed!");
    });
});