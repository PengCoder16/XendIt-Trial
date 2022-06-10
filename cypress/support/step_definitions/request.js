const requestBodies = require("../../request-body");
const {
  Given,
  When,
  Then,
  Before,
  After,
} = require("@badeball/cypress-cucumber-preprocessor");
const Mustache = require("mustache");

let context = {
  method: "GET",
  body: null,
  endpoint: null,
  parallelRunCount: null,
  basicAuth:
    "eG5kX2RldmVsb3BtZW50X003SEoyVlJMRGpKVmtLUk82WmdQUHF3SUhMVUhVQWU4MHpZTzdIMlZBdk4zR3E2UjY3T1JENEFyRzU0YVo6",
};

Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
  context.method = method;
  context.endpoint = endpoint;
});

Given(/I set body to (.+)$/, function (requestBodyKey) {
  try {
    context.body = JSON.parse(requestBodies[requestBodyKey]);
  } catch (error) {
    context.body = requestBodies[requestBodyKey];
  }
});

When("I receive a response", async function () {
  const { body, method, endpoint, basicAuth } = context;
  context.cyRequest = cy.request({
    body,
    method,
    headers: {
      Authorization: `Basic ${basicAuth}`,
    },
    url: endpoint,
  });
});

When("I run it for {int} times", async function (count) {
    context.parallelRunCount = count;
});

Then("I expect response to have the following values", async function (table) {
  const { body, method, endpoint, basicAuth, parallelRunCount } = context;
  const tableHash = table.rowsHash();


  if (parallelRunCount > 1) {
    cy.wrap(Promise.all([...Array(parallelRunCount).keys()].map((c) => {
      return fetch(`https://api.xendit.co${endpoint}`, {
        body,
        headers: { Authorization: `Basic ${basicAuth}` },
        method,
      });
    })), {timeout: 1000000});
  }

  cy.request({
    body,
    method,
    headers: {
      Authorization: `Basic ${basicAuth}`,
    },
    url: endpoint, failOnStatusCode:false
  }).then((resp) => {
    Object.keys(tableHash).map((key) => {
      const val = tableHash[key];

      if (key.startsWith("body.")) {
        expect(resp.body).to.have.property(
          key.substring("body.".length),
          Mustache.render(val, requestBodies)
        );
      } else {
        assert.equal(resp[key], val);
      }
    });
  });
});