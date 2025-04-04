import { loginActions, loginInteractions } from "@constants";
import { describe } from "mocha";
import { ct01_Data } from '../../data/pExpressWebsite/login/login.data';

describe("Login Parts Express Website", () => { 
    
    it("[CT-01]- Must validate login on the website successfully", () => {
        cy.visit(Cypress.env("BASE_URL"))
        loginActions.loginInPartsExpressWebsite(ct01_Data)
        loginInteractions.getMyAccountText(ct01_Data.myAccountTitleText)
    });
});
