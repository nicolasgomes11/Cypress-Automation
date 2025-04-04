import { registerActions, registerInteractios } from "@constants";
import { describe, it } from "mocha";
import { ct00_Data } from '../../data/pExpressWebsite/register/register.data';

describe("Register Parts Express Website", () => { 

    it("[CT-00]- Must validate site account registration successfully", () => {
        cy.visit(Cypress.env("BASE_URL"))
        registerActions.registerInPartsExpresshWebsite(ct00_Data)
        registerInteractios.getWelcomeText(ct00_Data.userName)
    })
})