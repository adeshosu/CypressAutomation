// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

    it('This is my first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Check boxes 

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')



        // Static Dropdown

      cy.get('select').select('option3').should('have.value', 'option3')
      

      // Dynamic Dropdown

      cy.get('#autocomplete').type('Nig')

      cy.get('.ui-menu-item').each(($el, index, $list) =>{

        if($el.text() === "Nigeria" ){

            cy.wrap($el).click()
        }


      })
  
      cy.get('#autocomplete').should('have.value','Nigeria')

    // Visible Invisible 
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
     
    //radio buttons
     
    cy.get('[value="radio2"]').check().should('be.checked')
    
    })})