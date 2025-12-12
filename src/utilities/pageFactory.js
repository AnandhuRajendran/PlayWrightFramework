const { expect } = require("@playwright/test");

class pageFactory {
    constructor(page) {
        this.page = page;

        this.username = this.page.locator('input[name="username"]');
        this.password = this.page.locator('input[name="password"]');
        this.loginButton = this.page.locator('button[type="submit"]');

    //Homepage Locators

        this.search = this.page.getByPlaceholder("Search");
        this.Maintenance= this.page.getByText("Maintenance");
        this.PurgeER= this.page.getByText("Purge Employee Records");

        this.adminMenu= this.page.locator('//*[text()= "Admin"][@class="oxd-text oxd-text--span oxd-main-menu-item--name"]');
        this.addUser_btn= this.page.locator('//*[@class="oxd-button oxd-button--medium oxd-button--secondary"]');
        
    //Add User

        this.userRole_ddl= this.page.locator('(//*[@class="oxd-select-text oxd-select-text--active"])[1]');
        this.userRole_Admin= this.page.locator("div.oxd-select-dropdown >> text=Admin");

        this.userStatus_ddl= this.page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div');
        this.userStatus_Enabled= this.page.locator("div.oxd-select-dropdown >> text=Enabled");
        this.employeeName_txt= this.page.getByPlaceholder("Type for hints...");

        

        
    }
}

module.exports = { pageFactory };