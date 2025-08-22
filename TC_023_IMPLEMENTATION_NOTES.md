# TC_023_01 Implementation Notes

## Test Case: Verify Address Details After Account Registration

### Overview
This test implements the complete flow described in issue #33:
1. Navigate to automationexercise.com
2. Verify home page visibility
3. Register a new account with address details
4. Add products to cart
5. Proceed to checkout
6. Verify delivery and billing addresses match registration data
7. Clean up by deleting the account

### Implementation Details

#### New Components Added:
1. **registrationData** in `testData.js` - Complete user registration data with address
2. **AccountRegistrationPage** enhancements - Full registration form support
3. **CheckoutPage** enhancements - Address verification and account deletion
4. **CartPage** enhancements - Checkout navigation
5. **fixtures.js** updates - Added new page objects

#### Key Features:
- Uses unique email addresses (timestamp-based) to avoid conflicts
- Comprehensive address verification comparing all address components
- Proper cleanup by deleting account after test
- Following existing project patterns for locators and methods

### Potential Issues and Solutions

#### Locator Issues:
If tests fail due to locator issues, the following might need adjustment:

1. **AccountRegistrationPage locators** - Updated to use ID selectors based on typical automationexercise.com form structure:
   - `#password`, `#first_name`, `#last_name`, etc.
   
2. **CheckoutPage address locators** - Using `#address_delivery` and `#address_invoice` which are common patterns

3. **Title selection** - Using `input[value="Mr"]` format for radio buttons

#### Address Verification:
The address verification checks for all components:
- Full name (first + last)
- Company
- Address line 1
- City, State + Zipcode
- Country

If verification fails, check the actual DOM structure of the checkout page address sections.

### Running the Test

```bash
# Run specific test
npx playwright test TC_023_verifyAdressAfterRegistration.spec.js

# Run with headed browser for debugging
npx playwright test TC_023_verifyAdressAfterRegistration.spec.js --headed

# Generate test report
npx playwright test TC_023_verifyAdressAfterRegistration.spec.js --reporter=html
```

### Debugging Tips

1. **Check locators**: Use browser dev tools to verify element selectors
2. **Verify form fields**: Ensure all registration form fields are properly identified
3. **Address format**: Check how addresses are displayed in checkout page
4. **Timing issues**: Add waits if elements load asynchronously

### Test Data
The test uses unique email addresses generated with timestamps to ensure each run creates a fresh account.