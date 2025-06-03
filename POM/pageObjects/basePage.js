class BasePage {
    constructor(page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle() {
        return await this.page.title();
    }

    async getUrl() {
        return this.page.url();
    }

    async waitForElement(selector) {
        await this.page.waitForSelector(selector);
    }

    async clickElement(selector) {
        await this.page.click(selector);
    }

    async fillField(selector, value) {
        await this.page.fill(selector, value);
    }
}

export default BasePage; 