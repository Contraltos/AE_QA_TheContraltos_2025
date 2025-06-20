import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';

test.describe("verify subscription on home page", () => {
  test("should subscribe successfully from homepage footer", async ({ homePage }) => {
    await homePage.verifyHomePageVisible();
    await homePage.verifyHomePageText();
    await homePage.scrollToFooter();
    await homePage.verifySubscriptionText();
    const testEmail = "testemail@example.com";
    await homePage.subscribeWithEmail(testEmail);
    await homePage.verifySuccessMessage();
  });
});

