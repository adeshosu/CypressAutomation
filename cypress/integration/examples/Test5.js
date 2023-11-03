// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

    it('This is my first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        

        cy.get("#opentab").invoke('removeAttr', 'target').click()

        cy.origin("https://www.qaclickacademy.com/",()=>{

        cy.get("#navbarSupportedContent a[href*='about']").click();
        cy.get(".mt-50 h2").should('contain','QAClick Academy');

        })


    })})