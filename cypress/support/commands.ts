import '@testing-library/cypress/add-commands';

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing commad --
// Cypress.Commands.overwrite('visit', (originalnFn, url, options) => { ... })

Cypress.Commands.add('login', (email = 'mano.martins29@gmail.com', password = 'positivo10@!') => {
  cy.visit('/sign-in');
  cy.get('#email').type(email);
  cy.get('#password').type(password);
  cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('fillField', (selector: string, value: string) => {
  cy.get(selector).type(value, {
    force: true,
  });
});

Cypress.Commands.add('checkToast', (titleValue, descriptionValue) => {
  cy.get('.chakra-alert').should('contain', titleValue)
  descriptionValue &&
    cy.get('.chakra-alert__desc').should('contain', descriptionValue)
})


Cypress.Commands.add('reactSelect', (name, quantity = 1, param = 'a') => {
  for (let i = 0; i < quantity; i++) {
    cy.get(`#${name}`).type(`${param}{enter}`, { force: true });
  }
});
