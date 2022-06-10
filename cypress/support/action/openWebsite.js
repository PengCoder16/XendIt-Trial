const openWebsite = (type, page) => {
    const url = (type === 'url') ? page : Cypress.config().baseUrl + page;
    cy.visit(url);
};

module.exports = openWebsite