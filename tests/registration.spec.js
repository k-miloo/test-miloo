import { test, expect } from '@playwright/test';
import * as selectors from './selectors';

const name = 'Name';
const email = 'example@example.com';
const password = 'Tokyo098123';

test('Verify registration form with valid credentials', async ({ page }) => {

    // Navigate to Home Page
  await page.goto('https://auth-home-task.vercel.app/');

  // Click on Go to Registration button
  await page.locator(selectors.goToBtn).click();

  // Fill in all inputs with valid data
  await page.locator(selectors.nameInput).fill(name);
  await page.locator(selectors.emailInput).fill(email);
  await page.locator(selectors.passwordInput).fill(password);
  await page.locator(selectors.confirmPasswordInput).fill(password);

  // Click on Register button 
  await page.locator(selectors.registerBtn).click();

  // Verify redirection to Home page 
  await expect(page.locator(selectors.homePageHeader)).toHaveText('Welcome to the Home Page!');

  // Verify the success message
  await expect(page.locator(selectors.successMessage)).toHaveText('You have registered successfully!');

});