const { expect } = require("@playwright/test");

class LoginSalesforce
{
 constructor(page){

    this.page=page;
    this.usernameInput= page.locator("#username");
    this.passwordInput= page.locator("#password");
    this.loginButton= page.locator("#Login");
 }

 async goToUrl()
 {
    await this.page.goto('https://login.salesforce.com/?locale=uk');
  
 }
 async enterUsername(username)
 {
    await  this.usernameInput.fill(username);
    
 }
 async enterPassword(password)
 {

    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(password);
    await this.loginButton.click();
 }
 
 async login(username, password)
 {

    await this.goToUrl();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.page.pause();
    
 }

 async validateTitle(){

    const title= await this.page.title();
    await expect(this.page).toHaveTitle('Lightning Experience | Salesforce');
    console.log("Verified the title");
 }
}
module.exports= {LoginSalesforce};