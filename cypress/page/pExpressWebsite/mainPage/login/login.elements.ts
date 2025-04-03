export default class LoginElements {

    get inpSignIn() { return cy.get('#site-header > div:nth-of-type(3) > ul > li:nth-of-type(2) > div > a:first-of-type') }
    get inpEmail() { return cy.get("#login-email") }
    get inpPassword() { return cy.get("#login-password") }
    get btnSignIn() { return cy.get("button[data-action='login-button']") }
    get lblMyAccount() { return cy.get(".myaccount-layout-title") }
}