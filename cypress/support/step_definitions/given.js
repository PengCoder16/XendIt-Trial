const { Given } = require('@badeball/cypress-cucumber-preprocessor');
const openWebsite = require("../action/openWebsite")

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);
