class AccountRegistrationPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      password: page.getByLabel('Password'),
      address: page.getByLabel('Address'),
      country: page.getByLabel('Country'),
      state: page.getByLabel('State'),
      city: page.getByLabel('City'),
      zipcode: page.getByLabel('Zipcode'),
      mobile: page.getByLabel('Mobile Number'),
      createAccountBtn: page.getByRole('button', { name: 'Create Account' })
    };
  }

  async fillRegistrationForm(userData) {
    await this.locators.password.fill(userData.password);
    await this.locators.address.fill(userData.address);
    await this.locators.country.selectOption(userData.country);
    await this.locators.state.fill(userData.state);
    await this.locators.city.fill(userData.city);
    await this.locators.zipcode.fill(userData.zipcode);
    await this.locators.mobile.fill(userData.mobile);
    await this.locators.createAccountBtn.click();
  }
}

export default AccountRegistrationPage;
