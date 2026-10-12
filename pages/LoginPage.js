
class LoginPage {
  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton   = page.locator('[data-test="login-button"]');
    this.pageTitle     = page.locator('[data-test="title"]');
  }

  async navigateTo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterUsername(username) {
    await this.usernameInput.clear();
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.clear();
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async getPageTitle() {
    await this.pageTitle.waitFor({ state: "visible" });
    return await this.pageTitle.textContent();
  }

  async isTitleVisible() {
    return await this.pageTitle.isVisible();
  }
}

module.exports = LoginPage;
