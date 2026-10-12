const { When, Then } = require("@cucumber/cucumber");
const { expect }     = require("@playwright/test");
const CartPage       = require("../pages/CartPage");
const testData       = require("../test-data/testData");

When("user clicks Add to Cart for Sauce Labs Backpack", async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickAddToCart();
});

When("user adds backpack to cart and completes checkout", async function () {
  this.cartPage = new CartPage(this.page);
  await this.cartPage.clickAddToCart();
  await this.cartPage.clickCartIcon();
  await this.cartPage.clickCheckout();
  await this.cartPage.fillCheckoutForm(
    testData.checkout.firstName,
    testData.checkout.lastName,
    testData.checkout.zipCode
  );
  await this.cartPage.clickContinue();
  await this.cartPage.clickFinish();
  this.downloadedFileName = await this.cartPage.clickGeneratePdf();
});

When("user clicks Back Home button", async function () {
  await this.cartPage.clickBackToProducts();
});

Then("the button text should change to {string}", async function (expectedText) {
  await expect(this.cartPage.removeBackpackButton).toHaveText(expectedText);
});

Then("a PDF file with name matching {string} should be downloaded", async function (expectedPattern) {
  expect(this.downloadedFileName).toContain(expectedPattern);
});

Then("user should see {string} title on products page", async function (expectedTitle) {
  await expect(this.cartPage.pageTitle).toBeVisible({ timeout: 10000 });
  const actualTitle = await this.cartPage.getPageTitle();
  expect(actualTitle.trim()).toBe(expectedTitle);
});
