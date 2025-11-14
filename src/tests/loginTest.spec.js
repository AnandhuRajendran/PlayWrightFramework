const {test,expect } = require("@playwright/test");
const {LoginSalesforce}= require('../pages/Login.js')

test("validateLogin", async function ({page})   
{

const loginPage= new LoginSalesforce(page);

await loginPage.login('medicheckslegeruser1620@agentforce.com', 'Summer2020#');
await loginPage.validateTitle();

    
})