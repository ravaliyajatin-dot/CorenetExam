Feature: SauceDemo Login

  Scenario: Successful login with valid credentials
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see the "Products" title on the page
