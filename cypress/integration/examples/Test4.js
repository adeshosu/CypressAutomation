// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

    it('This is my first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[value="Alert"]').click()
        cy.get('[value="Confirm"]').click()

        // window-event 
          
        cy.on('window:alert',(str) => {
           
          // mocha test framework
          expect(str).to.equal('Hello , share this practice page and share your knowledge')
        }
)

cy.on('window:confirm',(str) => {
           
  // mocha test framework
  expect(str).to.equal('Hello , Are you sure you want to confirm?')
}


)})})