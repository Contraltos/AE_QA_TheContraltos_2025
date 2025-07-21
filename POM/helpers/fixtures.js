import { test as base, expect } from '@playwright/test';
import HomePage from "../pageObjects/homePage";
import Header from '../pageObjects/header.js';
import SignupLoginPage from '../pageObjects/signupLoginPage.js';
import TestCasesPage from '../pageObjects/testCasesPage.js';
import ContactUsPage from '../pageObjects/contactUsPage.js';
import ProductsPage from '../pageObjects/productsPage.js';
import ProductDetailsPage from '../pageObjects/productDetailsPage.js';
import CartPage from '../pageObjects/cartPage.js';
import Footer from '../pageObjects/footer.js';
import CategoriesPage from '../pageObjects/categoriesPage.js';

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
  testCasesPage: async ({ page, homePage }, use) => {
    const testCasesPage = new TestCasesPage(page);
    await use(testCasesPage);
  },

  contactUsPage: async ({ page, homePage }, use) => {
    const contactUsPage = new ContactUsPage(page);
    await use(contactUsPage);
  },

  productsPage: async ({ page, homePage }, use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
  },

  productDetailsPage: async ({ page, homePage}, use) => {
    const productDetailsPage = new ProductDetailsPage(page);
    await use(productDetailsPage);
  },

    cartPage: async ({ page, homePage}, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },

    footer: async ({ page, homePage}, use) => {
    const footer = new Footer(page);
    await use(footer);
  },

  categoriesPage: async ({ page, homePage}, use) => {
    const categoriesPage = new CategoriesPage(page);
    await use(categoriesPage);
  }
});