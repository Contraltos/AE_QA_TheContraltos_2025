import { subscribtionData } from '../helpers/testData'; 
class Footer {
    constructor(page) {
        this.page = page;
      
        this.locators = {
            subscriptionText: page.locator('footer').getByText('SUBSCRIPTION'),
            emailInput: page.locator('input[type="email"]'),
            subscribeButton: page.locator('button#subscribe'),
            successAlert: page.getByText('You have been successfully subscribed!'),
        }
    }

    async waitForSubscriptionText() {
    await this.locators.subscriptionText.waitFor({ state: 'visible' });
    }

    async subscribeWithEmail(email) {
    await this.locators.emailInput.fill(email);
    await this.locators.subscribeButton.click();
    }

    get successSubscriptionAlert() {
    return this.page.getByText(subscribtionData.successSubscriptionText);
  }
}

export default Footer;