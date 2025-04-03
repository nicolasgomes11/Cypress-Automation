export default class RegisterElements {

    get inpSignIn() { return cy.get('#site-header > div:nth-of-type(3) > ul > li:nth-of-type(2) > div > a:first-of-type') }
    get inpFirstName() { return cy.get("#register-firstname") }
    get inpLastName() { return cy.get("#register-lastname") }
    get inpEmail() { return cy.get("#register-email") }
    get inpPassword() { return cy.get("#register-password") }
    get inpConfirmPassword() { return cy.get("#register-password2") }
    get btnCreateAccount() { return cy.get("#form-submit-register-guest-view-button") }
    get lblUserName() { return cy.get(".navbar-account-message-name") }
}