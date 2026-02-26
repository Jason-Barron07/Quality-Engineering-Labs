import { test, expect } from '@playwright/test';



// Adding a new expense in the transaction list
test('should add a new expense transaction', async ({ page }) => {

  // Navigate directly to the Transactions page
  await page.goto('https://quality-engineering-labs.vercel.app/transactions.html');

  // Fill in the transaction description field
  await page.getByTestId('txn-input').fill('monthly expenses');

  // Enter the transaction amount
  await page.getByTestId('txn-amount').fill('10000');

  // Select "expense" from the transaction type dropdown
  await page.getByTestId('txn-type').selectOption('expense');

  // Click the button to add the transaction
  await page.getByTestId('add-txn-btn').click();

  // Verify that the newly added transaction appears in the list
  await expect(page.getByText('monthly expenses')).toBeVisible();
});

 



