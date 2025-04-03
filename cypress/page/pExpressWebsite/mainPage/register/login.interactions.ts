import RegisterElements from "./login.elements";

export default class RegisterInteractions extends RegisterElements {

    protected clickEnterOrRegister() {
        super.inpEnterOrRegister.click();
    }

    protected setName(name: string) {
        super.inpName.type(name)
    }

    protected setEmail(email: string) {
        super.inpEmail.type(email)
    }

    protected setPassword(password: string) {
        super.inpPassword.type(password)
    }

    protected clickEnter() {
        super.btnEnter.click();
    }

    protected getWelcomeText() {
        super.lblUserName.should('have.text', 'Teste Cypress');
    }
}