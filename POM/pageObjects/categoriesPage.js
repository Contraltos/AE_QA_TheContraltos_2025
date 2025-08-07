import { expect } from '@playwright/test';

class CategoriesPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            getCategoriesSection: () => this.page.locator('#accordian'),
            getWomenCategory: () => this.page.locator('a[href="#Women"]'),
            getMenCategory: () => this.page.locator('a[href="#Men"]'),
            getWomenDressLink: () => this.page.locator('a[href="/category_products/1"]'),
            getMenTshirtsLink: () => this.page.locator('a[href="/category_products/3"]'),
            getCategoryPageTitle: () => this.page.locator('h2.title.text-center')
        };
    }

    async clickWomenCategory() {
        await this.locators.getWomenCategory().click();
    }

    async clickWomenDressSubcategory() {
        await this.locators.getWomenDressLink().click();
    }

    async clickMenCategory() {
        await this.locators.getMenCategory().click();
    }

    async clickMenTshirtsSubcategory() {
        await this.locators.getMenTshirtsLink().click();
    }

    async verifyCategoriesVisible() {
        await expect(this.locators.getCategoriesSection()).toBeVisible();
        await expect(this.locators.getWomenCategory()).toBeVisible();
        await expect(this.locators.getMenCategory()).toBeVisible();
    }

    async verifyWomenDressPage() {
        await expect(this.locators.getCategoryPageTitle()).toContainText('Women - Dress Products');
    }

    async verifyMenTshirtsPage() {
        await expect(this.locators.getCategoryPageTitle()).toContainText('Men - Tshirts Products');
    }
}

export default CategoriesPage;