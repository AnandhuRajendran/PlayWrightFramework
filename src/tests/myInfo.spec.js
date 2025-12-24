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

test('updatePersonalDetails', async({ page }) => {

    await loginPage.login(process.env.UNAME, process.env.PASSWORD);
    await action.waitForVisible(factory.adminMenu);
    await action.click(factory.myInfoMenu);
    await action.click(factory.personalDetails);
    await action.fillText(factory.middleName, "Yakub");

});