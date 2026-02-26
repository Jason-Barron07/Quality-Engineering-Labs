import { test, expect } from '@playwright/test';


//Checking if heading Market Rates is visible 
test('should navigate to Market page and verify title', async ({ page }) => {

  // Navigate to the Transactions page (application entry point for this test)
  await page.goto('https://quality-engineering-labs.vercel.app/transactions.html');

  // Click the "Market" link inside the main navigation menu
  // This action should trigger navigation to the Market page
  await page.getByLabel('Main navigation').getByRole('link', { name: 'Market' }).click();

  // Verify that the browser title updates to confirm successful navigation
  // Using regex with case-insensitive flag for resilience
await expect(page.getByRole('heading', { name: /Market Rates/i })).toBeVisible();
});