import { pageFactory } from "../utilities/pageFactory";
import { ActionKeywords } from "../utilities/actionKeywords";
import { LoginOrangeHRM } from "../utilities/Login";
const { test, expect } = require("@playwright/test");

let action;
let factory;
let loginPage;
test.beforeEach(async ({ page }) => {
    action = new ActionKeywords(page);
    factory = new pageFactory(page);
    loginPage = new LoginOrangeHRM(page);
});

test("performance", async ({ page }) => {

    await loginPage.login(process.env.UNAME, process.env.PASSWORD);
    await action.waitForVisible(factory.performanceMenu);
    await action.click(factory.performanceMenu);
    await action.waitForVisible(factory.txt_EmployeeReviews);
    await action.verifyText(factory.txt_EmployeeReviews, "Employee Reviews");
    

});