import AddProductToCartElements from "./addProductToCart.elements";

export default class AddProductToCartInteractions extends AddProductToCartElements {

    protected setSearchBox(productName: string) {
        super.inpSearchBox.should('be.visible').type(`${productName}{enter}`, { force: true })
    }          

    protected clickAddToCart() {
        super.btnAddToCart.scrollIntoView().click({ force: true });
    }    

    protected clickViewCart() {
        super.btnViewCart.click();
    }

    public verifyCartTitle(cartSummaryTitleText: string) {
        super.lblSumaryTitle.should('have.text', cartSummaryTitleText);
    }
}