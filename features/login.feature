Feature: SauceDemo Login

  Scenario: Successful login with valid credentials
    When user login with valid credentials
    Then user should see the "Products" title on the page
