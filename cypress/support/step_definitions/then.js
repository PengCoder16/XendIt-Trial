const { Then } = require('@badeball/cypress-cucumber-preprocessor');
const checkContainsText = require("../action/checkContainsText");
const checkIfElementExists = require("../action/checkIfElementExists");

Then(
  /^I expect that (button|element|input) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  checkContainsText
);

Then(
  /^I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times$/,
  checkIfElementExists
);
