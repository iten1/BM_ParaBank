/// <reference types="cypress"/>

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

    it('Should Open Update Contact Info Page', () => {
        cy.get("#leftPanel").within(()=>{
            cy.contains("Update Contact Info").click();
            cy.url().should('include', 'updateprofile');
        })
    })

    it('Should Update Profile Info', () => {
        cy.get("#rightPanel").within(() => { 
            cy.get("input").eq(0).type("itenMohamed");
            cy.get("input").eq(1).type("saad");
            cy.get("input").eq(2).type("Heliopolis");
            cy.get("input").eq(3).type("Cairo");
            cy.get("input").eq(4).type("Egypt");
            cy.get("input").eq(5).type("11742");
            cy.get("input").eq(6).type("01120027034");            
            cy.get("input").contains("Update Profile").click();

        })
    })

    it('Should LogOut', () => {
        cy.logOut();
    })
    

})