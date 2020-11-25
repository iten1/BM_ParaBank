/// <reference types="cypress"/>

import { getAccountNumber } from "../support/common";

describe('Open New Account Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Transfer Funds Page', () => {
        cy.get("#leftPanel").within(()=>{
            cy.contains("Transfer Funds").click();
            cy.url().should('include', 'transfer');
            cy.wait(2000);
        })
    })

    it('Should Transfer Funds', () => {
        cy.get("#amount").type("100");
        //cy.get('#fromAccountId').select(getAccountNumber());
        //cy.get('#toAccountId').select(getAccountNumber());
        cy.get("#rightPanel").within(()=>{
        cy.get("input").contains("Transfer").click();
        cy.contains("Transfer Complete!").should("be.visible");
        })
    })

    it('Should LogOut', () => {
        cy.logOut();
    })
    

})






    // it('Should Log Out Successfully', () => {

    //     cy.logOut();

    // })








