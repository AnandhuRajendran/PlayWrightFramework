const { expect } = require("@playwright/test");
//importing env 
// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, 'src/config/.env') });

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
    await this.page.goto(process.env.BASEURL);
      
 }

 async enterCredentials(username,password)
 {
    await  this.usernameInput.fill(process.env.UNAME);
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(process.env.PASSWORD);
    await this.loginButton.click();
 }
 
 async login(username, password)
 {

    await this.goToUrl();
    await this.enterCredentials(username,password);
    await this.page.pause();
    
 }

 async validateTitle(){

    const title= await this.page.title();
    await expect(this.page).toHaveTitle('Lightning Experience | Salesforce');
    console.log("Verified the title");
 }
}
module.exports= {LoginSalesforce};