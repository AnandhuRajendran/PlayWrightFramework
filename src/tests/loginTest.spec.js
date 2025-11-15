const {test,expect } = require("@playwright/test");
const {LoginSalesforce}= require('../pages/Login.js')

//importing env 
// import dotenv from 'dotenv';
// dotenv.config();
// import path from 'path';

// dotenv.config({ path: path.resolve(__dirname, './src/config', '.env') });

test("validateLogin", async function ({page})   
{

const loginPage= new LoginSalesforce(page);

await console.log(process.env.UNAME, process.env.PASSWORD);
await loginPage.login(process.env.UNAME, process.env.PASSWORD);
await loginPage.validateTitle();

    
})