const { expect } = require("@playwright/test");

class pageFactory {
    constructor(page) {
        this.page = page;

        this.username = this.page.locator('input[name="username"]');
        this.password = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('button[type="submit"]');

    //Homepage Locators

        this.search = this.page.getByPlaceholder("Search");
    }
}

module.exports = { pageFactory };