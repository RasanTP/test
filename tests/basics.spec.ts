import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://automationintesting.online/');
  
    // Check that a title exists.
    await expect(page).toHaveTitle("Restful-booker-platform demo");
  });