const { test, expect } = require("@playwright/test");
const { LoginOrangeHRM } = require('../utilities/Login.js')

//importing env 
// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, './src/config', '.env') });

test("validateLogin", async function ({ page }) {

    const loginPage = new LoginOrangeHRM(page);

    await loginPage.login(process.env.UNAME, process.env.PASSWORD);
    await loginPage.validateTitle();

})