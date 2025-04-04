import { addProductToCartActions, addProductToCartInteractions } from "@constants";
import { describe, it } from "mocha";
import { ct02_Data } from '../../data/pExpressWebsite/addProductToCart/addProductToCart.data';

describe("Adding products to the card Parts Express Website", () => {

    it("[CT-02] - Must validate the successful addition of a product to the cart", () => {
        cy.visit(Cypress.env("BASE_URL"))
        addProductToCartActions.addProductToCart(ct02_Data)
        addProductToCartInteractions.verifyCartTitle(ct02_Data.cartSummaryTitleText)
    });
});
