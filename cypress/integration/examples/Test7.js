// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

    it('This is my first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       
    // cy.get('.mouse-hover-content').invoke('show')
            cy.contains('Top').click({force: true})
            cy.url().should('include','top')
            
            


    })})