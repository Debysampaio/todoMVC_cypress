const { defineConfig } = require("cypress");

module.exports = {
  projectId: 'vciekf',
  e2e: {
    baseUrl:'https://todomvc.com/examples/javascript-es6/dist/'
  },
}
