Feature: Add to cart order Test

    @login
    Scenario: Create automated test for order add to cart
        When User launch and login to android application
        And User click on Add to Cart button
        And User click on Open Cart Icon
        And User click on checkout button and add details
        And User click on continue button
        Then Verify user is able to add item successfully
        