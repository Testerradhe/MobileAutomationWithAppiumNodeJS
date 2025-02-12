'use strict';

//This is used to store the locators for app elements
module.exports = {
    usernameField: async function () {
        return '//android.widget.EditText[@content-desc="test-Username"]';
    },
    passwordField: async function () {
        return '//android.widget.EditText[@content-desc="test-Password"]';
    },
    loginButton: async function () {
        return '//android.widget.TextView[@text="LOGIN"]';
    },

};
