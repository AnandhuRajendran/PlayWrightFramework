import { expect, test } from "@playwright/test";
import { title } from "process";

test ("dummyTest", async ({ page }) => {

await page.goto("https://google.co.uk");

await page.locator("//div[contains(text(), 'Accept all') and @role='none']").click();
await expect(page).toHaveTitle("Google");
await page.pause();

await page.locator("//*[@class='gLFyf']").fill("Automation");
await page.keyboard.press("Enter");

await page.pause();

});