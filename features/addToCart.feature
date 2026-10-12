Feature: Add to Cart

  Scenario: Login and add Sauce Labs Backpack to cart
    Given user is logged in with valid credentials
    When user clicks Add to Cart for Sauce Labs Backpack
    Then the button text should change to "Remove"

  Scenario: Complete checkout after adding product to cart
    Given user is logged in with valid credentials
    When user adds backpack to cart and completes checkout
    Then a PDF file with name matching "swag-labs-order" should be downloaded
    When user clicks Back Home button
    Then user should see "Products" title on products page
