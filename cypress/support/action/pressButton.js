 const pressButton = async (key) => {
    if (Array.isArray(key)) {
        for (let k of key) {
            cy.focused().type(k);
        }
    } else {
        cy.focused().type(key);
    }
};

module.exports = pressButton;