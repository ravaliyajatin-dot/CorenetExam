const { Given, When, Then } = require("@cucumber/cucumber");
const { expect }            = require("@playwright/test");
const LoginPage             = require("../pages/LoginPage");
const testData              = require("../test-data/testData");

Given("user navigates to SauceDemo login page", async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo();
});

When("user enters valid username and password", async function () {
  await this.loginPage.enterUsername(testData.validUser.username);
  await this.loginPage.enterPassword(testData.validUser.password);
});

When("user enters locked out user credentials", async function () {
  await this.loginPage.enterUsername(testData.lockedUser.username);
  await this.loginPage.enterPassword(testData.lockedUser.password);
});

When("user clicks the login button", async function () {
  await this.loginPage.clickLoginButton();
});

Then("user should see Products page title", async function () {
  await expect(this.loginPage.pageTitle).toBeVisible({ timeout: 10000 });
  const title = await this.loginPage.getPageTitle();
  expect(title.trim()).toBe(testData.validUser.expectedTitle);
});

Then("user should see locked out error message", async function () {
  await expect(this.loginPage.errorMessage).toBeVisible({ timeout: 10000 });
  const errorText = await this.loginPage.getErrorMessage();
  expect(errorText.trim()).toBe(testData.lockedUser.expectedError);
});
