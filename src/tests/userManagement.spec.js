const {test, expect } = require("@playwright/test");
const {ActionKeywords} = require("../utilities/actionKeywords.js");
const {pageFactory} = require("../utilities/pageFactory.js");
const {LoginOrangeHRM} =require("../utilities/Login.js");


let action;
let factory;
let loginPage;

test.beforeEach(async ({ page }) => {
    action = new ActionKeywords(page);
    factory = new pageFactory(page);
    loginPage = new LoginOrangeHRM(page);
});

test("addUser", async({ page }) =>{

await loginPage.login(process.env.UNAME, process.env.PASSWORD);
await page.waitForVisible('text=admin');
await action.click(factory.adminMenu);
await action.click(factory.addUser_btn);
await action.selectFromCustomDDL(factory.userRole_ddl, factory.userRole_Admin);
await action.selectFromCustomDDL(factory.userStatus_ddl, factory.userStatus_Enabled);
await action.click(factory.employeeName_txt)
await factory.employeeName_txt.fill("David");


await page.pause();

});