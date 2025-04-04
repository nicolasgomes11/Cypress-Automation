import RegisterInteractions from 'cypress/page/pExpressWebsite/mainPage/register/register.interactions';
import FakerHelpers from './helpers/faker/faker.helpers';
import RegisterActions from 'cypress/page/pExpressWebsite/mainPage/register/register.actions';
import LoginActions from 'cypress/page/pExpressWebsite/mainPage/login/login.actions';
import LoginInteractions from 'cypress/page/pExpressWebsite/mainPage/login/login.interactions';
import AddProductToCartActions from 'cypress/page/pExpressWebsite/mainPage/addProductToCart/addProductToCart.actions';
import AddProductToCartInteractions from 'cypress/page/pExpressWebsite/mainPage/addProductToCart/addProductToCart.interactions';

export const fakerHelper = new FakerHelpers();
export const registerActions = new RegisterActions();
export const registerInteractios = new RegisterInteractions
export const loginActions = new LoginActions();
export const loginInteractions = new LoginInteractions();
export const addProductToCartActions = new AddProductToCartActions();
export const addProductToCartInteractions = new AddProductToCartInteractions();