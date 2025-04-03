export default class RegisterElements {

    get inpSignIn() { return cy.get('.row-one-links > .account-link > .header-menu-profile > .header-profile-login-link > p') }
    get inpFirstName() { return cy.get("#register-firstname") }
    get inpLastName() { return cy.get("#register-lastname") }
    get inpEmail() { return cy.get("#register-email") }
    get inpPassword() { return cy.get("#register-password") }
    get inpConfirmPassword() { return cy.get("#register-password2") }
    get btnCreateAccount() { return cy.get("#form-submit-register-guest-view-button") }
    get lblUserName() { return cy.get(".navbar-account-message-name") }
}