const { Given, When, Then } = require("@cucumber/cucumber");
const { expect }            = require("@playwright/test");
const LoginPage             = require("../pages/LoginPage");
const CartPage              = require("../pages/CartPage");

// Login step — reuse LoginPage POM
Given("I am logged in as {string} with password {string}", async function (username, password) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateTo();
  await this.loginPage.enterUsername(username);
  await this.loginPage.enterPassword(password);
  await this.loginPage.clickLoginButton();
});

// Click Add to Cart for Sauce Labs Backpack
When("I click Add to Cart for Sauce Labs Backpack", async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickAddToCart();
});

// Assert button text changed to "Remove"
Then("the button text should change to {string}", async function (expectedText) {
  await expect(this.cartPage.removeBackpackButton).toHaveText(expectedText);
});
