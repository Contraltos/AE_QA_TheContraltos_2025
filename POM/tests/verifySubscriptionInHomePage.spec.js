import { expect } from "@playwright/test";
import { test } from "../helpers/fixtures";

test.describe("verify subscription on home page", () => {
    test("should subscribe successfully from homepage footer", async ({ homePage }) => {

        await homePage.scrollToFooter();
        await homePage.verifySubscriptionText();
        await homePage.subscribeWithEmail('testemail@example.com');
        await homePage.verifySuccessMessage();
    });
});