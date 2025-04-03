import RegisterInteractions from "./register.interactions";
import { IRegisterInterface } from '../../../../../interface/fartechWebsite/login/register.interface';

export default class RegisterActions extends RegisterInteractions {
    
    public registerInPartsExpresshWebsite(register: IRegisterInterface) {
        this.clickSignIn();
        Promise.all([
            this.setFirstName(register.name),
            this.setLastName(register.lastName),
            this.setEmail(register.email),
            this.setPassword(register.password),
            this.setConfirmPassword(register.password),
        ])
        this.clickCreateAccount();
        this.getWelcomeText(register.userName);
    }
}