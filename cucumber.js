module.exports = {
  default: {
    features: ["features/**/*.feature"],
    require: ["step-definitions/**/*.js", "hooks/**/*.js"],
    format: ["progress", "html:reports/report.html"],
    formatOptions: { snippetInterface: "async-await" },
    timeout: 30000, // 30 seconds — slowMo વાળા tests માટે enough time
  },
};
