const { expect } = require('@playwright/test');

class ActionKeywords
{
 constructor (page)
 {
  this.page = page;
 }

 async click(locator)
 {
    await locator.click();
 }

 async waitForLocator(locator)
 {

    await locator.waitFor({ state: 'visible' });
 }

 async inputText(locator, text)
 {
   await locator.fill(text);
 }

 async verifyText(locator, text)
 {
   await expect(locator.filter({ hasText: text })).toContainText;
 }

}

module.exports={ActionKeywords};