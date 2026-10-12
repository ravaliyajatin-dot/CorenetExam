/**
 * CartPage - Page Object Model for Add to Cart & Checkout functionality
 * URL: https://www.saucedemo.com/inventory.html
 */
class CartPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    // --- Inventory Page ---
    this.addToCartBackpack    = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartIcon             = page.locator('[data-test="shopping-cart-link"]');

    // --- Cart Page ---
    this.checkoutButton = page.locator('[data-test="checkout"]');

    // --- Checkout Step One ---
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput  = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');

    // --- Checkout Step Two ---
    this.finishButton = page.locator('[data-test="finish"]');

    // --- Order Confirmation ---
    this.generatePdfButton = page.locator('[data-test="generate-pdf-order"]');
    this.backToProductsButton = page.locator('[data-test="back-to-products"]');
    this.pageTitle            = page.locator('[data-test="title"]');
  }

  /** Click Add to Cart for Sauce Labs Backpack */
  async clickAddToCart() {
    await this.addToCartBackpack.click();
  }

  /** Click the cart icon to open cart */
  async clickCartIcon() {
    await this.cartIcon.click();
  }

  /** Click Checkout button */
  async clickCheckout() {
    await this.checkoutButton.click();
  }

  /**
   * Fill checkout form
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} zipCode
   */
  async fillCheckoutForm(firstName, lastName, zipCode) {
    await this.firstNameInput.clear();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.clear();
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.clear();
    await this.postalCodeInput.fill(zipCode);
  }

  /** Click Continue button */
  async clickContinue() {
    await this.continueButton.click();
  }

  /** Click Finish button */
  async clickFinish() {
    await this.finishButton.click();
  }

  /**
   * Click Generate PDF order button and capture downloaded filename
   * @returns {Promise<string>} downloaded file name
   */
  async clickGeneratePdf() {
    const [download] = await Promise.all([
      this.page.waitForEvent("download"),
      this.generatePdfButton.click(),
    ]);
    return download.suggestedFilename();
  }

  /** Click Back Home button after PDF download */
  async clickBackToProducts() {
    await this.backToProductsButton.click();
  }

  /** Get page title text */
  async getPageTitle() {
    await this.pageTitle.waitFor({ state: "visible" });
    return await this.pageTitle.textContent();
  }
}

module.exports = CartPage;
