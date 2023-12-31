const { defineConfig } = require("cypress");



module.exports = defineConfig({

  defaultCommandTimeout: 9000,

  projectId: "9a9fcb",

  env:{
     url : "https://rahulshettyacademy.com"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
