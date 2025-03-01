import { test, expect } from '@playwright/test';
import * as selectors from './selectors';

const name = 'Name';
const email = 'example@example.com';
const password = 'Tokyo098123';
const invalidPassword = 'ToKyo098123';

test('Verify invalid confirm password error message', async ({ page }) => {

    // Navigate to Home Page
  await page.goto('https://auth-home-task.vercel.app/');

  // Click on Go to Registration button
  await page.locator(selectors.goToBtn).click();

  // Fill in name, email, and password inputs with valid data
  await page.locator(selectors.nameInput).fill(name);
  await page.locator(selectors.emailInput).fill(email);
  await page.locator(selectors.passwordInput).fill(password);

  // Fill in confirm password input with invalid data
  await page.locator(selectors.confirmPasswordInput).fill(invalidPassword);

  // Click on Register button 
  await page.locator(selectors.registerBtn).click();

  // Verify the error message
  await expect(page.locator(selectors.errorMessage)).toHaveText('Passwords do not match.');

});