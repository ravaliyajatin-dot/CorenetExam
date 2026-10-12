Feature: Add to Cart

  Scenario: Login and add Sauce Labs Backpack to cart
    Given I am logged in as "standard_user" with password "secret_sauce"
    When I click Add to Cart for Sauce Labs Backpack
    Then the button text should change to "Remove"
