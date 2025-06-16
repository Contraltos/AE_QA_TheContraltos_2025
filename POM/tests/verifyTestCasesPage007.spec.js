import { test } from "../helpers/fixtures";


test.describe("007", () => {
  test("verify test cases page", async ({ testCasesPage, homePage }) => {
    await homePage.verifyHomePageText();         
    await homePage.clickTestCasesLink();
    await testCasesPage.verifyTestCasesPage();
  });
});
        
        
