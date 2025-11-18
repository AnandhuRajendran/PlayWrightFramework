import { test as setup, expect } from '@playwright/test';
import fs from 'fs';

const authFile = 'storageState.json';

setup('authenticate', async ({ page }) => {

  // Skip running login again if storage state already exists
  if (fs.existsSync(authFile)) {
    console.log("storageState.json already exists → Skipping OTP login");
    return;
  }

  console.log("No storage state found → Running initial login with OTP...");

  // Navigate to login page
  await page.goto(process.env.BASEURL);

  // Enter email & password
  await page.fill('#username', process.env.TEST_EMAIL);
  await page.fill('#password', process.env.TEST_PASSWORD);
  await page.click('#Login');

  // Wait for OTP field to appear
  await page.waitForSelector('#emc');

  console.log("Pause here → Enter OTP manually in the opened browser.");
  await page.pause();  
  // After entering OTP manually, click verify to proceed.

  // Validate successful login
  await expect(page).toHaveTitle('Lightning Experience | Salesforce');

  // Save storage state for future runs
  await page.context().storageState({ path: authFile });

  console.log("Login successful → storageState.json created");
});
