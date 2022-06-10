const checkIfElementExists = require("./checkIfElementExists");
const selectors = require("../../constants/selectors.json");
const setInputField = (method, value, selector) => {
    const command = method === "add" ? "addValue" : "type";
  
    let checkValue = value;
  
    checkIfElementExists(selector, false, 1);
  
    if (!value) {
      checkValue = "";
    }
  
    if (command == "addValue") {
      cy.xpath(selectors[selector])
        .invoke("val")
        .then((prevVal) => cy.xpath(selectors[selector]).type(`${prevVal}${checkValue}`));
    } else {
      cy.xpath(selectors[selector]).type(checkValue);
    }
  };

module.exports = setInputField