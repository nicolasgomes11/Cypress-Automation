import RegisterInteractions from "./login.interactions";
import { IRegisterInterface } from '../../../../../interface/fartechWebsite/login/register.interface';

export default class RegisterActions extends RegisterInteractions {
    
    public registerInPartsExpresshWebsite(login: IRegisterInterface) {
        this.clickEnterOrRegister();
        Promise.all([
            this.setName(login.name),
            this.setEmail(login.email),
            this.setPassword(login.password)
            ])
        this.clickEnter();
    }
}