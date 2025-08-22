class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      proceedToCheckout: page.getByRole('link', { name: 'Proceed To Checkout' }),
      deliveryAddress: page.locator('#address_delivery'),
      billingAddress: page.locator('#address_invoice'),
      deleteAccount: page.getByRole('link', { name: 'Delete Account' }),
      accountDeletedText: page.getByText('ACCOUNT DELETED!'),
      continueBtn: page.getByRole('link', { name: 'Continue' })
    };
  }

  async proceedToCheckout() {
    await this.locators.proceedToCheckout.click();
  }

  async getDeliveryAddress() {
    return await this.locators.deliveryAddress.textContent();
  }

  async getBillingAddress() {
    return await this.locators.billingAddress.textContent();
  }

  async verifyAddresses(userData) {
    const delivery = await this.getDeliveryAddress();
    const billing = await this.getBillingAddress();
    
    // Check if both addresses contain the expected data
    const addressComponents = [
      userData.firstName + ' ' + userData.lastName,
      userData.company,
      userData.address,
      userData.city,
      userData.state + ' ' + userData.zipcode,
      userData.country
    ];

    const deliveryMatches = addressComponents.every(component => 
      delivery.includes(component)
    );
    
    const billingMatches = addressComponents.every(component => 
      billing.includes(component)
    );

    return deliveryMatches && billingMatches;
  }

  async deleteAccount() {
    await this.locators.deleteAccount.click();
  }

  async verifyAccountDeleted() {
    await this.locators.accountDeletedText.waitFor({ state: 'visible' });
  }

  async clickContinueAfterDeletion() {
    await this.locators.continueBtn.click();
  }
}

export default CheckoutPage;
