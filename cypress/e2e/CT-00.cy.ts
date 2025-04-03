import { loginActions, registerInteractios } from "@constants";
import { describe, it } from "mocha";
import { ct00_Data } from '../../data/pExpressWebsite/register/login.data';

describe("Parts Express Website", () => { 

    it("[CT-00] Register account on the Parts Express website", () => {
        cy.visit('https://www.parts-express.com/')
        loginActions.registerInPartsExpresshWebsite(ct00_Data)
        registerInteractios.getWelcomeText(ct00_Data.userName)
    })
})