const testData = {
  // --- Login Data ---
  validUser: {
    username: "standard_user",
    password: "secret_sauce",
    expectedTitle: "Products",
  },

  lockedUser: {
    username: "locked_out_user",
    password: "secret_sauce",
    expectedTitle: "",
    expectedError: "Epic sadface: Sorry, this user has been locked out.",
  },

  invalidUser: {
    username: "invalid_user",
    password: "wrong_password",
    expectedTitle: "",
    expectedError: "Epic sadface to the rescue! Username and password do not match any user in this service",
  },

  // --- Checkout Data ---
  checkout: {
    firstName: "Jatin",
    lastName:  "Ravaliya",
    zipCode:   "395006",
  },

  // --- PDF Assertion ---
  pdfNamePattern: "swag-labs-order",
};

module.exports = testData;
