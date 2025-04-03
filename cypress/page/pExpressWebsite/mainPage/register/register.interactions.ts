import RegisterElements from "./register.elements";

export default class RegisterInteractions extends RegisterElements {

    public clickSignIn() {
        super.inpSignIn.click();
    }
    public setFirstName(firstName: string) {
        super.inpFirstName.type(firstName);
    }
    public setLastName(lastName: string) {
        super.inpLastName.type(lastName);
    }

    public setEmail(email: string) {
        super.inpEmail.type(email);
    }

    public setPassword(password: string) {
        super.inpPassword.type(password);
    }

    public setConfirmPassword(password: string) {
        super.inpConfirmPassword.type(password);
    }

    public clickCreateAccount() {
        super.btnCreateAccount.click();
    }  

    public getWelcomeText(userName: string) {
        super.lblUserName.should('be.visible').and('contain.text', userName);
    }
}