const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zn96hz',
  e2e: {
    baseUrl:'https://todomvc.com/examples/javascript-es6/dist/'
  },
});
