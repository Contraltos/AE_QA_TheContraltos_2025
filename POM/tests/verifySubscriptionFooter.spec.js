import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';
import { subscribtionData } from "../helpers/testData";

test.describe("TC_011_01 - Verify subscription in Cart Page", () => {
  test.skip("Should subscribe successfully from cart page", async ({ homePage, page, footer, header, productsPage }) => {
    await header.clickCart();
    await productsPage.scrollToFooter();
    await footer.waitForSubscriptionText();
    await footer.subscribeWithEmail(subscribtionData.subscribedemail);
    await expect(footer.successSubscriptionAlert).toBeVisible();
    await expect(footer.successSubscriptionAlert).toHaveText(subscribtionData.successSubscriptionText);
  });
});

