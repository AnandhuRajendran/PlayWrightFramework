const { expect } = require('@playwright/test');

class ActionKeywords {
  constructor(page) {
    this.page = page;
  }
  /*****************Mouse Actions**************** */

  async click(locator) {

    await locator.click();

  }

  async doubleclick(locator) {

    await locator.doubleclick();
  }

  async checkBox(locator) {
    await locator.check();
  }

  async mouseHover(locator) {
    await locator.hover();
  }

  async dragAndDrop(sourceLocator, targetLocator) {
    await sourceLocator.dragTo(targetLocator);
  }

  async scrollToElement(locator) {

    await locator.scrollToElement();
  }

  //Drop down List 

  //1. Select by Visible Text
  async ddl_SelectByLabel(locator, visibleText) {
  await locator.selectOption({label: visibleText});
  }

  //2. Select by Value
  async ddl_SelectByValue(locator, value) {
  await locator.selectOption(value);
  }

  //3. Select by Index
  async ddl_SelectByIndex(locator, index_value) {
  await locator.selectOption({index: index_value});
  }

  //4. Custom DDL (Not having <select> tag)
  async selectFromCustomDDL(locator, ddllocator) {
  await locator.click(); // open dropdown
  await ddllocator.waitFor({ state: 'visible' });
  await ddllocator.click();
  }




  /*****************Keyboard Actions**************** */
  async fillText(locator, text) {
    await locator.fill(text);
  }

  async typeText(locator, text) {
    await locator.type(text);
  }

  async clearText(locator) {
    await locator.fill('');
  }

  async pressKey(locator, key) {
    await locator.press(key);
    //Keys are : Enter, Escape, Control+A, Backspace, ArrowDown, etc..
  }

  /*****************Wait Actions**************** */

  async waitForVisible(locator) {

    await locator.waitFor({ state: 'visible' });
  }

  /*****************Verification Actions**************** */
  async verifyText(locator, text) {
    await expect(locator.filter({ hasText: text })).toContainText;
  }

  async getText(locator) {

    return await locator.textContent();

  }

  /*****************File Actions**************** */

  async uploadFile(locator, filePath) {
    await locator.setInputFiles(filePath); //upload a file
  }

  async downloadFile(locator, page) {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      locator.click()
    ]);

    return download;
  }

  //************************************************************/


}

module.exports = { ActionKeywords };