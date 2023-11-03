// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

it('This is my first test case',()=>{
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get(".search-keyword").type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)

    // Parent Child Chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',4)
    cy.get('@productLocator').find('.product').eq(2).contains("ADD TO CART").click()

    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    // // cy.get('@productLocator').find('.product').each(($el, index, $list) => {

    // //     const textVeg=$el.find('h4.product-name').text()
        
    // //     if(textVeg.includes('Cashews')){

    // //         $el.find('button').click()

    // //     }


    // })
})


})