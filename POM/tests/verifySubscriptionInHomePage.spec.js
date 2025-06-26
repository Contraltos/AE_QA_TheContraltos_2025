import { test, expect } from "@playwright/test";
import { subscriptionData } from "../helpers/testData";

test.describe("verify subscription on home page", () => {
  test("should subscribe successfully from homepage footer", async ({ homePage }) => {
    await homePage.verifyHomePageVisible();
    await homePage.verifyHomePageText();
    await homePage.scrollToFooter();
    await homePage.verifySubscriptionText();

    const testEmail = subscriptionData.generateTestEmail();
    await homePage.subscribeWithEmail(testEmail);

    const successAlert = homePage.locators.successAlert;
    await expect(successAlert).toBeVisible();
    await expect(successAlert).toContainText("You have been successfully subscribed!");
  });
});