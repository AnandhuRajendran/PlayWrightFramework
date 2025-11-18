const { expect } = require("@playwright/test");
const { /*encryptCredentials,*/ decryptCredentials } = require("./crypto.js");

//importing env 
// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, 'src/config/.env') });

class LoginSalesforce
{
 constructor(page){

    this.page=page;
    this.usernameInput= page.locator('input[name="username"]');
    this.passwordInput= page.locator('input[name="password"]');
    this.loginButton= page.locator('button[type="submit"]');
 }

 async goToUrl()
 {
    await this.page.goto(process.env.BASEURL);
      
 }

 async enterCredentials()
 {
  
   //  const encryptedUname = process.env.UNAME_ENC;
   //  const encryptedPassword = process.env.PASSWORD_ENC;
      
    const username = decryptCredentials( process.env.UNAME);
    const password = decryptCredentials(process.env.PASSWORD);

    await this.usernameInput.fill(username);
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(3000);
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
    await expect(this.page).toHaveTitle('OrangeHRM');
    console.log("Verified the title");
 }

}
module.exports= {LoginSalesforce};