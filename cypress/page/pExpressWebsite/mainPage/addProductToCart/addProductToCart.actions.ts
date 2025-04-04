import AddProductToCartInteractions from "./addProductToCart.interactions";
import { IAddProductToCartWebsiteInterface } from '../../../../../interface/website/addProductToCart/addProductToCart.interface';

export default class AddProductToCartActions extends AddProductToCartInteractions {
    public addProductToCart(productName: IAddProductToCartWebsiteInterface) {
        this.setSearchBox(productName.productName);
        this.clickAddToCart();
        this.clickViewCart();
        this.verifyCartTitle(productName.cartSummaryTitleText);
    }
}