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
  },

  invalidUser: {
    username: "invalid_user",
    password: "wrong_password",
    expectedTitle: "",
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
