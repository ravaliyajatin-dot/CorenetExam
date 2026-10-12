Feature: Login Page Tests

  Scenario: Successful login with valid credentials
    Given user navigates to SauceDemo login page
    When user enters valid username and password
    And user clicks the login button
    Then user should see Products page title

  Scenario: Negative login with locked out user
    Given user navigates to SauceDemo login page
    When user enters locked out user credentials
    And user clicks the login button
    Then user should see locked out error message
