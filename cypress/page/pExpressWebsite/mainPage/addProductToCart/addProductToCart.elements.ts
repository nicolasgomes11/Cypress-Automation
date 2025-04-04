export default class AddProductToCartElements {
    get inpSearchBox() { return cy.get('#site-header > div:nth-of-type(3) > div:nth-of-type(2) > div > div > div > div > form > div > div > input') }
    get btnAddToCart() { return cy.get('.add-to-cart-button-plp') }
    get btnViewCart() { return cy.get('.cart-confirmation-modal-view-cart a') }
    get lblSumaryTitle() { return cy.get('.cart-summary-container h3') }
}