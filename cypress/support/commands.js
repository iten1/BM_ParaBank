
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import { getUserName } from "./common";

Cypress.Commands.add("logOut", () => { 
    cy.contains("Log Out").click();
 })

 Cypress.Commands.add("login", () => { 
    cy.get("#loginPanel").within(() => {
        cy.get('[name="username"]').type(getUserName());
        cy.get('[name="password"]').type(Cypress.env("password"));
        cy.contains("Log In").click();
        
    })
 })


