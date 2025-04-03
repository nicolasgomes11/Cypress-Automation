export default class RegisterElements {

    get inpEnterOrRegister() { return cy.get("button[data-testid*='userlogin']") }
    get inpName() { return cy.get("input[data-testid*='slice-login-register-name']") }
    get inpEmail() { return cy.get("input[data-testid*='slice-login-email-input']']") }
    get inpPassword() { return cy.get("input[data-testid*='slice-login-password-input']") }
    get btnEnter() { return cy.get("button[data-testid*='slice-login-sign-up-button']") }
    get lblUserName() { return cy.get("p[data-testid*='username']") }
}