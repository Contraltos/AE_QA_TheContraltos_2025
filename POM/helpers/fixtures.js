import { test as base } from '@playwright/test';
import HomePage from "../pageObjects/homePage";
import Header from '../pageObjects/header.js';
import SignupLoginPage from '../pageObjects/signupLoginPage.js';
import TestCasesPage from '../pageObjects/testCasesPage.js';

export const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.loadHomePage();
    await homePage.handleCookies();
    await use(homePage);
  },
  header: async ({ page }, use) => {
    const header = new Header(page);
    await use(header);
  },
  signupLoginPage: async ({ page, header, homePage }, use) => {
    await header.clickSignupLoginLink();
    const signupLoginPage = new SignupLoginPage(page);
    await use(signupLoginPage);
  },
  testCasesPage: async ({ page }, use) => {
    const testCasesPage = new TestCasesPage(page);
    await use(testCasesPage);
  },

  contactUsPage: async ({ page }, use) => {
    const contactUsPage = new СontactUsPage(page);
    await use(contactUsPage);
  },

  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  }

});