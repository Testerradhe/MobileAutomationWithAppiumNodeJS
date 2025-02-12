const superagent = require('superagent');
const { When, Then } = require("@cucumber/cucumber");
const { By, until, Key } = require("selenium-webdriver");
const productsPageObjects = require('../page_objects/productsPageObjects') ;
const data = require('../../fixture/user.json');
const timeout = 60000;
const utils = require('../utils/utility');
var assert = require('chai').assert;


When(/^User click on Add to Cart button$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.addToCartButton())));
  await this.driver.findElement({ xpath: productsPageObjects.addToCartButton() }).click();
});

When(/^User click on Open Cart Icon$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.openCartIcon())));
    await this.driver.findElement({ xpath: productsPageObjects.openCartIcon() }).click();
});

When(/^User click on checkout button and add details$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.checkOutButton())));
    await this.driver.findElement({ xpath: productsPageObjects.checkOutButton() }).click();

    await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.checkOutFirstNameField())));
    await this.driver.findElement({ xpath: productsPageObjects.checkOutFirstNameField() }).sendKeys(data.Firstname);
    await this.driver.findElement({ xpath: productsPageObjects.checkOutLastNameField() }).sendKeys(data.Lastname);
    await this.driver.findElement({ xpath: productsPageObjects.checkOutZipcodeField() }).sendKeys(data.Zipcode);
});

When(/^User click on continue button$/, async function () {
    await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.continueButton())));
    await this.driver.findElement({ xpath: productsPageObjects.continueButton() }).click();
});

When(/^User click on finish button$/, async function () {
   // await this.driver.actions().move({x: 500, y:1000}).press().move({x:500, y:500}).releaase().perform();
    await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.finishButton())));
    await this.driver.findElement({ xpath: productsPageObjects.finishButton() }).click();
});

Then(/^Verify user is able to add item successfully$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.checkoutOverview())));
  const el = await this.driver.wait(until.elementLocated(By.xpath(productsPageObjects.checkoutOverview())), timeout);
  assert.exists(el);
});
