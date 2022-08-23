// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.checkToast('titleValue')
       */
      checkToast(
        titleValue: string,
        descriptionValue?: string
      ): Chainable<Element>

      /**
       * Custom command to login to system
       * @example cy.login('example@example.com.br', '123456')
       */
      login: (email?: string, password?: string) => Chainable<Element>

      /**
       * Custom command to fill a field with a value
       * @example cy.fillField('#name', 'John Doe')
       */
      fillField(selector: string, value: string): Chainable<Element>

      /**
       * Custom command to fill a field with a value
       * @example cy.reactSelect('#gender', 1)
       */
      reactSelect(
        name: string,
        quantity: number,
        param?: string
      ): Chainable<Element>
    }
  }
}
