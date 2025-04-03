import RegisterInteractions from 'cypress/page/pExpressWebsite/mainPage/register/register.interactions';
import FakerHelpers from './helpers/faker/faker.helpers';
import LoginActions from 'cypress/page/pExpressWebsite/mainPage/register/register.actions';

export const fakerHelper = new FakerHelpers();
export const loginActions = new LoginActions();
export const registerInteractios = new RegisterInteractions
