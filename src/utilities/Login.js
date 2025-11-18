const { expect } = require("@playwright/test");
const { pageFactory } = require("../utilities/pageFactory.js");

const { /*encryptCredentials,*/ decryptCredentials } = require("./crypto.js");

//importing env 
// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, 'src/config/.env') });

class LoginOrangeHRM {
   constructor(page) {
      this.page = page;

      // Create factory ONLY here
      const factory = new pageFactory(page);

      this.usernameInput = factory.username;
      this.passwordInput = factory.password;
      this.loginButton = factory.loginButton;
   }

   async goToUrl() {
      await this.page.goto(process.env.BASEURL);

   }

   async enterCredentials() {

      //  const encryptedUname = process.env.UNAME_ENC;
      //  const encryptedPassword = process.env.PASSWORD_ENC;

      const username = decryptCredentials(process.env.UNAME);
      const password = decryptCredentials(process.env.PASSWORD);

      await this.usernameInput.fill(username);
      await this.passwordInput.waitFor({ state: 'visible' });
      await this.passwordInput.fill(password);
      await this.page.waitForTimeout(3000);
      await this.loginButton.click();
   }

   async login(username, password) {

      await this.goToUrl();
      await this.enterCredentials(username, password);
   }

   async validateTitle() {

      const title = await this.page.title();
      await expect(this.page).toHaveTitle('OrangeHRM');
      console.log("Verified the title");
   }

}
module.exports = {LoginOrangeHRM};