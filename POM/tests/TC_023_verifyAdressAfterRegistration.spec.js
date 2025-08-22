import { expect } from '@playwright/test';
import { test } from "../helpers/fixtures";
import { signupLoginPageData } from '../helpers/testData';

test.describe('Search products and add to cart', () => {
  test('TC_023_01_Verify search products and add to cart process', async ({ homePage, header, productsPage, signupLoginPage, cartPage }) => {
    await header.clickProductsLink();
    await expect(productsPage.page).toHaveURL(/.*products/);

    await productsPage.searchProduct('dress');
    await expect(productsPage.locators.getSearchedProductsTitle()).toContainText('Searched Products');

    const searchResultsCount = await productsPage.getSearchResultsCount();
    expect(searchResultsCount).toBeGreaterThan(0);

    await productsPage.addProductToCartByIndex(0);
    await productsPage.continueShopping();
    await productsPage.addProductToCartByIndex(1);
    await productsPage.viewCart();

    const cartItems = await productsPage.getCartItems();
    expect(cartItems.length).toBe(2);
    
    await header.clickSignupLoginLink();
    await signupLoginPage.fillEmail(signupLoginPageData.email);
    await signupLoginPage.fillPassword(signupLoginPageData.password);
    await signupLoginPage.clickLoginButton();
    await header.clickCartLink();

    const cartItemsAfterLogin = await productsPage.getCartItems();
    expect(cartItemsAfterLogin.length).toBe(2);
  });
});
