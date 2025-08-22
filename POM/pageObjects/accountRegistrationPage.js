class AccountRegistrationPage {
  constructor(page) {
    this.page = page;
    this.locators = {
      // Account Information section
      title: {
        mr: page.getByRole('radio', { name: 'Mr.' }),
        mrs: page.getByRole('radio', { name: 'Mrs.' })
      },
      password: page.getByLabel('Password'),
      dayOfBirth: page.locator('#days'),
      monthOfBirth: page.locator('#months'),
      yearOfBirth: page.locator('#years'),
      firstName: page.getByLabel('First name'),
      lastName: page.getByLabel('Last name'),
      company: page.getByLabel('Company'),
      address: page.getByLabel('Address'),
      address2: page.getByLabel('Address 2'),
      country: page.locator('#country'),
      state: page.getByLabel('State'),
      city: page.getByLabel('City'),
      zipcode: page.getByLabel('Zipcode'),
      mobile: page.getByLabel('Mobile Number'),
      createAccountBtn: page.getByRole('button', { name: 'Create Account' }),
      // Success messages
      accountCreatedText: page.getByText('ACCOUNT CREATED!'),
      continueBtn: page.getByRole('link', { name: 'Continue' }),
      loggedInText: page.locator('.navbar-nav').getByText(/Logged in as/)
    };
  }

  async selectTitle(title) {
    if (title === 'Mr') {
      await this.locators.title.mr.click();
    } else if (title === 'Mrs') {
      await this.locators.title.mrs.click();
    }
  }

  async fillRegistrationForm(userData) {
    await this.selectTitle(userData.title);
    await this.locators.password.fill(userData.password);
    await this.locators.firstName.fill(userData.firstName);
    await this.locators.lastName.fill(userData.lastName);
    await this.locators.company.fill(userData.company);
    await this.locators.address.fill(userData.address);
    await this.locators.address2.fill(userData.address2);
    await this.locators.country.selectOption(userData.country);
    await this.locators.state.fill(userData.state);
    await this.locators.city.fill(userData.city);
    await this.locators.zipcode.fill(userData.zipcode);
    await this.locators.mobile.fill(userData.mobile);
  }

  async clickCreateAccount() {
    await this.locators.createAccountBtn.click();
  }

  async verifyAccountCreated() {
    await this.locators.accountCreatedText.waitFor({ state: 'visible' });
  }

  async clickContinue() {
    await this.locators.continueBtn.click();
  }

  async verifyLoggedIn(username) {
    await this.locators.loggedInText.waitFor({ state: 'visible' });
    const text = await this.locators.loggedInText.textContent();
    return text.includes(username);
  }
}

export default AccountRegistrationPage;
