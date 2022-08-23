import { faker } from '@faker-js/faker';

describe('Create an order', () => {
  it('should be able to create an order', () => {
    cy.login()
    cy.get('.css-1htwnxp > :nth-child(2) > .chakra-button').click()

    cy.findByText('Finalizar compra').click()

    cy.get('.css-1jymczd').click()
    cy.get('.css-cwy42q').click()
    cy.get('[data-testid="priceTotal"]').then(($span) => {

      const priceTotal = $span.text();
   
      cy.log(priceTotal);

      cy.get('[data-testid="payment-price-0"]').type(priceTotal)
    
      cy.get('.css-1z08vrn').click()
    })
  })

  // it('should be able to create exchange', () => {
  //   cy.login()

  //   cy.get('.css-nd8846 > .chakra-link').click()
  //   cy.get('[href="/account/orders"] > .chakra-stack').click()
  //   cy.get(':nth-child(1) > .css-mt4cvt > .chakra-button__group > .chakra-stack > :nth-child(2)').click()
  //   cy.get(':nth-child(1) > .chakra-numberinput > .css-1jj9yua > :nth-child(1)').click()
  //   cy.get('.css-x7adz0').click()
  //   cy.get('.chakra-offset-slide > p.css-0').should('contain', 'Segue abaixo o código de troca gerado para você.')
  // })

  // it('should be able to cancel an order', () => {
  //   cy.login()

  //   cy.get('.css-nd8846 > .chakra-link').click()
  //   cy.get('[href="/account/orders"] > .chakra-stack').click()
  //   cy.get(':nth-child(1) > .css-mt4cvt > .chakra-button__group > .chakra-stack > :nth-child(2)').click()
  //   cy.get(':nth-child(1) > .chakra-numberinput > .css-1jj9yua > :nth-child(1)').click()
  //   cy.get('.css-x7adz0').click()
  //   cy.get('.chakra-offset-slide > p.css-0').should('contain', 'Segue abaixo o código de troca gerado para você.')
  // })

  // it('should be able to create a credit card', () => {
  //   cy.login()

  //   const creditCardNumber = String(Math.floor(1000 + Math.random() * 9000))

  //   cy.get('.css-nd8846 > .chakra-link').click()
  //   cy.get('[href="/account/cards"] > .chakra-stack').click()
  //   cy.get('.css-1yqpede > .chakra-button').click()

  //   cy.get('#documentNumber').type('185.676.140-15')
  //   cy.get('#cardNumber').type(`${creditCardNumber} ${creditCardNumber} ${creditCardNumber} ${creditCardNumber}`)

  //   cy.get('#cardHolder').type('João da Silva')
  //   cy.get('#cardExpiry').type('05/24')
  //   cy.get('#cardCvv').type('123')

  //   cy.get('.css-auyhgd').click()
    
  //   cy.checkToast('Cartão cadastrado com sucesso')
  // })
  
  // it('should be able to delete a credit card', () => {
    //   cy.login()
    
    //   cy.get('.css-nd8846 > .chakra-link').click()
    //   cy.get('[href="/account/cards"] > .chakra-stack').click()
    //   cy.get(':nth-child(3) > .chakra-button__group > .css-186tkuz').click()
    // })
    
  //   it('should be able to create an address', () => {
  //     cy.login()
      
  //     cy.get('.css-nd8846 > .chakra-link').click()
  //     cy.get('[href="/account/addresses"] > .chakra-stack').click()
  //     cy.get('.css-1yqpede > .chakra-button').click()
      
  //     cy.get('#zipCode').type('08694180')
  //     cy.get('#street').type('Rua dos Bobos')
  //     cy.get('#number').type('123')
  //     cy.get('#complement').type('Casa')
  //     cy.get('#neighborhood').type('Bairro')
  //     cy.get('#stateId').select('SP')
  //     cy.get('#cityId').select('Suzano')
      
  //     cy.get('.css-auyhgd').click()
  //     cy.checkToast('Seu endereço foi cadastrado com sucesso!')
  // })

  //   it('should be able to delete an address', () => {
  //     cy.login()
      
  //     cy.get('.css-nd8846 > .chakra-link').click()
  //     cy.get('[href="/account/addresses"] > .chakra-stack').click()
  //     cy.get(':nth-child(3) > .chakra-button__group > .css-186tkuz').click()
  // })
})