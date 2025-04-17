const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.blazedemo.com/',
    chromeWebSecurity: false,
    viewportWidth: 1920, // Largura do viewport em pixels
    viewportHeight: 1080, // Altura do viewport em pixels

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
