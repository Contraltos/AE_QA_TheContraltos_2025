import { expect } from '@playwright/test';

class TestCasesPage {
    constructor(page) {
        this.page = page;
        this.testCasesText = page.getByText(
      "Below is the list of test Cases for you to practice the Automation. Click on the scenario for detailed Test Steps:");
    }
    
    async verifyTestCasesPage() {    
        await expect(this.testCasesText).toHaveCSS("color", "rgb(255, 0, 0)");
        await expect(this.testCasesText).toBeVisible();
    }
}

export default TestCasesPage; 
