const { When, Then } = require("@cucumber/cucumber");
const { expect }     = require("@playwright/test");
const LoginPage      = require("../pages/LoginPage");

When("I login with username {string} and password {string}", async function (username, password) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo();
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
  await this.loginPage.clickLoginButton();
});

Then("I should see the {string} title on the page", async function (expectedTitle) {
  await expect(this.loginPage.pageTitle).toBeVisible({ timeout: 10000 });
  const actualTitle = await this.loginPage.getPageTitle();
  expect(actualTitle.trim()).toBe(expectedTitle);
});
