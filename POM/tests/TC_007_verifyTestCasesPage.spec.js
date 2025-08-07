import { test } from "../helpers/fixtures";


test.describe("TC_007_01 - Verify test cases page", () => {
  test("Verify test cases", async ({ testCasesPage, homePage }) => {
    await homePage.verifyHomePageText();         
    await homePage.clickTestCasesLink();
    await testCasesPage.verifyTestCasesPage();
  });
});
        
        
