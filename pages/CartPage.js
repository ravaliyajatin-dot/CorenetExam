/**
 * CartPage - Page Object Model for Add to Cart functionality
 * URL: https://www.saucedemo.com/inventory.html
 */
class CartPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    // Add to Cart button for Sauce Labs Backpack
    this.addToCartBackpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

    // Remove button (appears after adding to cart)
    this.removeBackpackButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
  }

  /**
   * Click Add to Cart for Sauce Labs Backpack
   */
  async clickAddToCart() {
    await this.addToCartBackpack.click();
  }

  /**
   * Get the text of the Remove button
   * @returns {Promise<string>}
   */
  async getRemoveButtonText() {
    await this.removeBackpackButton.waitFor({ state: "visible" });
    return await this.removeBackpackButton.textContent();
  }
}

module.exports = CartPage;
