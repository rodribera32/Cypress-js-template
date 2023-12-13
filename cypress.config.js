const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://admin-demo.nopcommerce.com/",
    defaultCommandTimeout: 20000
  },
});
