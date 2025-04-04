import LoginInteractions from "./login.interactions";
import { ILoginWebsiteInterface } from '../../../../../interface/Website/login/login.interface';

export default class LoginActions extends LoginInteractions {

    public loginInPartsExpressWebsite(login: ILoginWebsiteInterface) {
        this.clickSignIn();
        this.setEmail(login.email);
        this.setPassword(login.password);
        this.clickSignInButton();
        this.getMyAccountText(login.myAccountTitleText);
    }
}