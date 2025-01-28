'use strict';
//This is used to store the locators for app elements
module.exports = {
    productsHeading: async function () {
        return '//android.widget.TextView[@text="PRODUCTS"]';
    },

    addToCartButton: async function () {
        return '(//android.widget.TextView[@text="ADD TO CART"])[1]';
    },

    openCartIcon: async function () {
        return '//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView';
    },

    checkOutButton: async function () {
        return '//android.widget.TextView[@text="CHECKOUT"]';
    },

    checkOutFirstNameField: async function () {
        return '//android.widget.EditText[@content-desc="test-First Name"]';
    },

    checkOutLastNameField: async function () {
        return '//android.widget.EditText[@content-desc="test-Last Name"]';
    },

    checkOutZipcodeField: async function () {
        return '//android.widget.EditText[@content-desc="test-Zip/Postal Code"]';
    },

    continueButton: async function () {
        return '//android.widget.TextView[@text="CONTINUE"]';
    },

    checkoutOverview: async function () {
        return '//android.widget.TextView[@text="CHECKOUT: OVERVIEW"]'
    },

    finishButton: async function () {
        return '//android.widget.TextView[@text="FINISH"]';
    },

    completeOrderSuccessMessage: async function () {
        return 'android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]';
    },
};
