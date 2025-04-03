import LoginElements from "./login.elements";

export default class LoginInteractions extends LoginElements{

    protected clickSignIn() {
        super.inpSignIn.click();
    }

    protected setEmail(email: string) {
        super.inpEmail.type(email);
    }

    protected setPassword(password: string) {
        super.inpPassword.type(password);
    }

    protected clickSignInButton() {
        super.btnSignIn.click();
    }

    public getMyAccountText(myAccountTitleText: string) {
        super.lblMyAccount.should('be.visible').and('contain.text', myAccountTitleText);
    }
}