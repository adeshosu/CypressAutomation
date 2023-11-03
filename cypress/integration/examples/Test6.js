// Cypress - Spec
/// <reference types="Cypress" />

describe('My first Cypress Project',()=>{

    it('This is my first test case',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) =>{

            const getText = $e1.text()
            if(getText.includes("Python")){

                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })
            }
    
        
        })
            
            
            


    })})