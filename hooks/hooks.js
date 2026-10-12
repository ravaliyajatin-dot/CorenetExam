const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

// Increase timeout to handle slowMo delays
setDefaultTimeout(30 * 1000); // 30 seconds

let browser;

// Launch browser once before all scenarios
BeforeAll(async function () {
  browser = await chromium.launch({
    headless: false,
    slowMo: 800, // દરેક action વચ્ચે 800ms delay — steps clearly visible થશે
  });
});

// Create a fresh browser context and page before each scenario
Before(async function () {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });
  this.page    = await context.newPage();
  this.context = context;
});

// Close context after each scenario
After(async function () {
  await this.context.close();
});

// Close browser after all scenarios
AfterAll(async function () {
  await browser.close();
});
