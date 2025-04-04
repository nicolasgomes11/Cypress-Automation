import RegisterElements from "./register.elements";

export default class RegisterInteractions extends RegisterElements {

    protected clickSignIn() {
        super.inpSignIn.click();
    }
    protected setFirstName(firstName: string) {
        super.inpFirstName.type(firstName);
    }
    protected setLastName(lastName: string) {
        super.inpLastName.type(lastName);
    }

    protected setEmail(email: string) {
        super.inpEmail.type(email);
    }

    protected setPassword(password: string) {
        super.inpPassword.type(password);
    }

    protected setConfirmPassword(password: string) {
        super.inpConfirmPassword.type(password);
    }

    protected clickCreateAccount() {
        super.btnCreateAccount.click();
    }  

    public getWelcomeText(userName: string) {
        super.lblUserName.should('be.visible').and('contain.text', userName);
    }
}