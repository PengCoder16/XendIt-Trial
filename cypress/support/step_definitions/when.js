const { When } = require('@badeball/cypress-cucumber-preprocessor');
const setInputField = require("../action/setInputField")
const pressButton = require("../action/pressButton")
const clickElement = require("../action/clickElement")

When(
    /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/,
    setInputField
);

When(
    /^I press "([^"]*)?"$/,
    pressButton
);

When(
    /^I (click|doubleclick) on the (link|button|element) "([^"]*)?"$/,
    clickElement
);

When (
    /^I wait for (.*) miliseconds$/ ,
    function (miliseconds) {cy.wait(parseInt(miliseconds))}
);