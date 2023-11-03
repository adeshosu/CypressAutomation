// Cypress - Spec
/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage'
import ShopPage from '../pageObject/ShopPage'

describe('My first Cypress Project',()=>{

    before(function(){
        // run before all test run

        cy.fixture('example').then(function(data){

            this.data = data
        })
    })

    it('This is my first test case',()=>{

        const homePage = new HomePage()
        const shopPage = new ShopPage()
    
        cy.visit(Cypress.env('url')+ "/angularpractice/")

        homePage.getEditBox().type('Adeshile')
        homePage.getGender().select('Male')
        homePage.getTwoWayDataBinding().should('have.value', 'Adeshile')
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()

        
        shopPage.getShop().click()
        shopPage.getBlackberry().each(($el, index, $list) =>{

            if($el.text().includes('Blackberry')){
    
               cy.get('button.btn.btn-info ').eq(index).click()
            }
         

        })

        shopPage.getCheckout().click()
        shopPage.getCheckoutPage().click()
        shopPage.getCountryText().type('India')
        shopPage.getCountryFromList().click()
        shopPage.getCheckBox().click({force: true})
        shopPage.getPurchase().click()
        shopPage.getPurchaseCompleteMessage().should('contain.text','Success!')
        shopPage.getPurchaseCompleteMessage().then(function(element){

            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true

        })

    })})