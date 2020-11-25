/// <reference types="cypress"/>

describe('Bill Pay Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Open Bill Pay Page', () => {
        cy.get("#leftPanel").within(() => {
            cy.contains("Bill Pay").click();
            cy.url().should('include', 'billpay');
        })
    })

    it('Should Pay Bill', () => {
        cy.get("#rightPanel").within(() => {
            cy.get("input").eq(0).type("iten");
            cy.get("input").eq(1).type("New Cairo");
            cy.get("input").eq(2).type("Cairo");
            cy.get("input").eq(3).type("Egypt");
            cy.get("input").eq(4).type("11742");
            cy.get("input").eq(5).type("01006606322");
            cy.get("input").eq(6).type("21115");
            cy.get("input").eq(7).type("21115");
            cy.get("input").eq(8).type("100");
            //cy.get("input").eq(10).type("21114");
            cy.contains("Send Payment").click();
        })

    })

    it('Should LogOut', () => {
        cy.logOut();
    })


})