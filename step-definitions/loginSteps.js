const { Given, When, Then } = require("@cucumber/cucumber");
const { expect }            = require("@playwright/test");
const LoginPage             = require("../pages/LoginPage");
const testData              = require("../test-data/testData");

Given("user is logged in with valid credentials", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo();
  await this.loginPage.enterUsername(testData.validUser.username);
  await this.loginPage.enterPassword(testData.validUser.password);
  await this.loginPage.clickLoginButton();
});

When("user login with valid credentials", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo();
  await this.loginPage.enterUsername(testData.validUser.username);
  await this.loginPage.enterPassword(testData.validUser.password);
  await this.loginPage.clickLoginButton();
});

Then("user should see the {string} title on the page", async function (expectedTitle) {
  await expect(this.loginPage.pageTitle).toBeVisible({ timeout: 10000 });
  const actualTitle = await this.loginPage.getPageTitle();
  expect(actualTitle.trim()).toBe(expectedTitle);
});
