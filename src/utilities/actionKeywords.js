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

}

module.exports={ActionKeywords};