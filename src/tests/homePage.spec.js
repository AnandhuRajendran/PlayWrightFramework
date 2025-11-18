const { test, expect } = require("@playwright/test");
const { LoginOrangeHRM } = require("../utilities/Login.js");
const { pageFactory } = require("../utilities/pageFactory.js");
const { ActionKeywords } = require("../utilities/actionKeywords.js")

//declaring actionKeywords and pagefactory globally to available across the tests
let action;
let factory;
let loginPage;
test.beforeEach(async ({ page }) => {
    action = new ActionKeywords(page);
    factory = new pageFactory(page);
    loginPage = new LoginOrangeHRM(page);
});

test("HomepageValidation", async () => {

await loginPage.login(process.env.UNAME, process.env.PASSWORD);
await action.waitForLocator(factory.search);
await action.click(factory.search)


});