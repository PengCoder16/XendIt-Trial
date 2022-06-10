const selectors = require("../../constants/selectors.json");

const checkIfElementExists = (selector, falseCase, exactly) => {
  cy.xpath(selectors[selector]).should(($actual) => {
    let nrOfElements = $actual.length;
    if (falseCase === true) {
      expect(nrOfElements).eq(
        0,
        `Element with selector "${selector}" should not exist on the page`
      );
    } else if (exactly) {
      expect(nrOfElements).eq(
        exactly,
        `Element with selector "${selector}" should exist exactly ${exactly} time(s)`
      );
    } else {
      expect(nrOfElements).gte(
        1,
        `Element with selector "${selector}" should exist on the page`
      );
    }
  });
};

module.exports = checkIfElementExists;
