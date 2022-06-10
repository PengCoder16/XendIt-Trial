const checkIfElementExists = require("./checkIfElementExists");
const selectors = require("../../constants/selectors.json");
const clickElement = (action, type, selector) => {
  const selector2 = type === "link" ? `=${selector}` : selector;
  const method = action === "click" ? "click" : "dblclick";

  checkIfElementExists(selector2);

  cy.xpath(selectors[selector2])[method]();
};

module.exports = clickElement;
