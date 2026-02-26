import { test, expect } from '@playwright/test';



//Navigate through different login inputs and successfully log into Finlab
test('should login successfully and display Financial Dashboard', async ({ page }) => {
  
  // Navigate to the transactions page
  await page.goto('https://quality-engineering-labs.vercel.app/transactions.html');
  // Click the Login link in the main navigation
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Login' }) .click();
  // Fill in the username field
  await page.getByTestId('login-username').fill('admin');
  // Fill in the password field
  await page.getByTestId('login-password').fill('password123');
  // Check the "Remember Me" checkbox
  await page.getByTestId('remember-me').check();
  // Submit the login form
  await page.getByTestId('login-submit').click();
  // Assert that the Financial Dashboard heading is visible after login
  await expect(page.getByRole('heading', { name: /Financial Dashboard/i })).toBeVisible();

});