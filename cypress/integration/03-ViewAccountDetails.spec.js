/// <reference types="cypress"/>

describe('View Account Details Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Click On Accounts Overview', () => {
        cy.get("#leftPanel").within(() => {
            cy.contains("Accounts Overview").click();
            cy.url().should('include', 'overview');
        })

    })

    it('Should LogOut', () => {
        cy.logOut();
    })

})
