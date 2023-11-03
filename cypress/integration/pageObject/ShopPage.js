class ShopPage {

    getShop(){
        return cy.get(':nth-child(2) > .nav-link')
    }
    
    getBlackberry(){
        return cy.get('h4.card-title')
    }

    getCheckout(){

        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')

    }
    getCheckoutPage(){
        return cy.get(':nth-child(3) > :nth-child(5) > .btn')
    }
    
    getCountryText(){
        return cy.get('#country')

    }

    getCountryFromList(){
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckBox(){
        return cy.get('#checkbox2')
    }

    getPurchase(){
        return cy.get('input[type="submit"]')
    }

    getPurchaseCompleteMessage(){
        return cy.get('.alert')
    }


}

export default ShopPage;