import { test } from "../helpers/fixtures";
import { subscriptionData } from "../helpers/testData";

test.describe("verify subscription on home page", () => {
  test("should subscribe successfully from homepage footer", async ({ homePage }) => {
    await homePage.verifyHomePageVisible();
    await homePage.verifyHomePageText();
    await homePage.scrollToFooter();
    await homePage.verifySubscriptionText();

    const testEmail = subscriptionData.generateTestEmail();
    await homePage.subscribeWithEmail(testEmail);
    await homePage.verifySuccessSubscriptionMessage();
  });
});