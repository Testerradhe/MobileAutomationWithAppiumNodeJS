'use strict';

// Load environment variables from .env file
require('dotenv').config();

const { Builder } = require("selenium-webdriver");
const { Before, After } = require("@cucumber/cucumber");

var createBrowserStackSession = function () {
  return new Builder()
    .usingServer(`https://${process.env.BROWSERSTACK_USERNAME}:${process.env.BROWSERSTACK_ACCESS_KEY}@hub-cloud.browserstack.com/wd/hub`)
    .build();
};

Before(function (scenario, callback) {
  var world = this;
  world.driver = createBrowserStackSession();
  callback();
});

After(function (scenario, callback) {
  this.driver.quit().then(function () {
    callback();
  });
});
