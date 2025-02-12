const superagent = require('superagent');
const { When, Then } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const loginPageObjects = require('../page_objects/loginPageObjects');
const productsPageObjects = require('../page_objects/productsPageObjects') ;
const data = require('../../fixture/user.json');
const timeout = 60000;
const utils = require('../utils/utility');
var assert = require('chai').assert;

let otp = "";

When(/^User launch and login to android application$/, async function () {

  //User enter Username under the field
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.usernameField())));
  await this.driver.findElement({ xpath: loginPageObjects.usernameField() }).click();
  await this.driver.findElement({ xpath: loginPageObjects.usernameField() }).sendKeys(data.Username);

  //User enter password under the field
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.passwordField())));
  await this.driver.findElement({ xpath: loginPageObjects.passwordField() }).click();
  await this.driver.findElement({ xpath: loginPageObjects.passwordField() }).sendKeys(data.Password);

  //This will click on LOGIN button
  await this.driver.wait(until.elementLocated(By.xpath(loginPageObjects.loginButton())));
  await this.driver.findElement({ xpath: loginPageObjects.loginButton() }).click();

});

Then(/^Verify user is logged in successfully$/, async function () {
  const el = await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.productsHeading())), timeout);
  assert.exists(el);
});