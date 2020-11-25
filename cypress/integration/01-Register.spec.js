/// <reference types="cypress"/>

import { getUserName } from "..//support/common";
describe('Register Suite', () => {

    beforeEach(() => {
        Cypress.Cookies.preserveOnce("__cfduid", "JSESSIONID");
    })
    before(() => {
        cy.visit("http://parabank.parasoft.com/parabank/index.htm");

    })

    it('click on register link', () => {
        cy.get("#loginPanel").within(() => {
            cy.contains("Register").click();
        })

    })

    it('Fill Registration Form', () => {
        cy.get("#customerForm").within(() => {
            cy.get("input").eq(0).type("iten");
            cy.get("input").eq(1).type("saad");
            cy.get("input").eq(2).type("sheraton");
            cy.get("input").eq(3).type("cairo");
            cy.get("input").eq(4).type("egypt");
            cy.get("input").eq(5).type("11742");
            cy.get("input").eq(6).type("01006606322");
            cy.get("input").eq(7).type("23654123698574");
            cy.get("input").eq(8).type(getUserName());
            cy.get("input").eq(9).type(Cypress.env("password"));
            cy.get("input").eq(10).type(Cypress.env("password"));
            cy.contains("Register").click();

        })
    })

    it('Should Redirect to the Home Screen', () => {
        cy.get("#rightPanel").within(() => {
            cy.get("p").should("have.text", "Your account was created successfully. You are now logged in.");

        })
    })

    it('Should Log Out Successfully', () => {

        cy.logOut();

    })
})




