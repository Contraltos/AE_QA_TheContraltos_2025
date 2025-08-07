import { test } from "../helpers/fixtures";
import { expect } from '@playwright/test';
import { subscribtionData } from "../helpers/testData";  

test.describe("TC_011_01 - Verify subscription in Footer", () => {
  test("Should subscribe successfully from homepage footer", async ({ homePage, page, footer }) => {
    await homePage.scrollToFooter();
    await footer.waitForSubscriptionText();
    await footer.subscribeWithEmail(subscribtionData.subscribedemail);
    await expect(footer.successSubscriptionAlert).toBeVisible();
    await expect(footer.successSubscriptionAlert).toHaveText(subscribtionData.successSubscriptionText);
    
  });
});

