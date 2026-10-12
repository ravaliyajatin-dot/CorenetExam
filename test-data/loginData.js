const loginData = {
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
};

module.exports = loginData;
