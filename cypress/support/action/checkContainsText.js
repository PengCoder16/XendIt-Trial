const checkContainsText = (
    elementType,
    selector,
    falseCase,
    expectedText,
) => {

    let boolFalseCase;
    let stringExpectedText = expectedText;

    if (typeof expectedText === 'undefined') {
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    if (boolFalseCase) {
        if (elementType == 'input') {
            cy.xpath(selector).should('not.contain.value', stringExpectedText)
        } else {
            cy.xpath(selector).should('not.contain.text', stringExpectedText)
        }
    } else {
        if (elementType == 'input') {
            cy.xpath(selector).should('contain.value', stringExpectedText)
        } else {
            cy.xpath(selector).should('contain.text', stringExpectedText)
        }
    }
};


module.exports = checkContainsText;