import { expect } from '@playwright/test';
import { test } from "../helpers/fixtures";
import { registrationData } from '../helpers/testData';

test.describe('TC_023_01 - Verify Address Details After Account Registration', () => {
  test('Verify that delivery and billing addresses match registration data', async ({ 
    homePage, 
    header, 
    signupLoginPage, 
    accountRegistrationPage, 
    productsPage, 
    cartPage, 
    checkoutPage 
  }) => {
    // 1. Launch browser and navigate to url - handled by homePage fixture
    // 2. Navigate to url 'http://automationexercise.com' - handled by homePage fixture
    
    // 3. Verify that home page is visible successfully
    await homePage.verifyHomePageVisible();
    
    // 4. Click 'Signup / Login' button
    const signupPage = await header.clickSignupLoginLink();
    
    // 5. Fill all details in Signup and create account
    await signupPage.verifyNewUserSignupVisible();
    await signupPage.fillSignupName(registrationData.name);
    await signupPage.fillSignupEmail(registrationData.email);
    await signupPage.clickSignupButton();
    
    // Fill registration form
    await accountRegistrationPage.fillRegistrationForm(registrationData);
    await accountRegistrationPage.clickCreateAccount();
    
    // 6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
    await accountRegistrationPage.verifyAccountCreated();
    await accountRegistrationPage.clickContinue();
    
    // 7. Verify 'Logged in as username' at top
    const isLoggedIn = await accountRegistrationPage.verifyLoggedIn(registrationData.name);
    expect(isLoggedIn).toBe(true);
    
    // 8. Add products to cart
    await header.clickProductsLink();
    await productsPage.verifyProductsPageAndCount();
    await productsPage.addProductToCartByIndex(0);
    await productsPage.continueShopping();
    
    // 9. Click 'Cart' button
    await header.clickCartLink();
    
    // 10. Verify that cart page is displayed
    await cartPage.verifyCartPageDisplayed();
    
    // 11. Click Proceed To Checkout
    await cartPage.proceedToCheckout();
    
    // 12. Verify that the delivery address is the same address filled at the time registration of account
    // 13. Verify that the billing address is the same address filled at the time registration of account
    const addressesMatch = await checkoutPage.verifyAddresses(registrationData);
    expect(addressesMatch).toBe(true);
    
    // 14. Click 'Delete Account' button
    await checkoutPage.deleteAccount();
    
    // 15. Verify 'ACCOUNT DELETED!' and click 'Continue' button
    await checkoutPage.verifyAccountDeleted();
    await checkoutPage.clickContinueAfterDeletion();
  });
});
