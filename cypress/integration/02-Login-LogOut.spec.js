/// <reference types="cypress"/>

describe('Login/LogOut Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should LogOut', () => {
        cy.logOut();
    })

})








