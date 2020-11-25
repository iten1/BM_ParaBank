/// <reference types="cypress"/>

import { setAccountNumber } from "../support/common";

describe('Open New Account Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");
        //cy.clearCookies();

    })

    it('Should Login', () => {
        cy.login();
    })

    it('Should Open New Account Page', () => {
        cy.get("#leftPanel").within(()=>{
            cy.contains("Open New Account").click();
            cy.url().should('include', 'openaccount');
        })
    })

    it('Should Open New Account', () => {
        cy.get('#type').select('SAVINGS');
        cy.wait(4000);
        cy.get("#rightPanel").within(()=>{
        cy.get("input").contains("Open New Account").click();
        cy.contains("Congratulations, your account is now open.").should("be.visible");
        // cy.get("#newAccountId").then(($val)=>{
        //     setAccountNumber($val.text());
        // })
        })
    })

    it('Should LogOut', () => {
        cy.logOut();
    })
    

})






    // it('Should Log Out Successfully', () => {

    //     cy.logOut();

    // })








