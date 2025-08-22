class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      proceedToCheckout: page.getByRole('link', { name: 'Proceed To Checkout' }),
      deliveryAddress: page.getByTestId('delivery_address'),
      billingAddress: page.getByTestId('billing_address'),
      deleteAccount: page.getByRole('link', { name: 'Delete Account' }),
      accountDeletedText: page.getByText('ACCOUNT DELETED!'),
      continueBtn: page.getByRole('link', { name: 'Continue' })
    };
  }

  async proceedToCheckout() {
    await this.locators.proceedToCheckout.click();
  }

  async verifyAddresses(userData) {
    const delivery = await this.locators.deliveryAddress.textContent();
    const billing = await this.locators.billingAddress.textContent();
    return (
      delivery.includes(userData.address) &&
      billing.includes(userData.address) &&
      delivery.includes(userData.city) &&
      billing.includes(userData.city) &&
      delivery.includes(userData.country) &&
      billing.includes(userData.country)
    );
  }

  async deleteAccount() {
    await this.locators.deleteAccount.click();
    await this.locators.accountDeletedText.waitFor({ state: 'visible' });
    await this.locators.continueBtn.click();
  }
}

export default CheckoutPage;
