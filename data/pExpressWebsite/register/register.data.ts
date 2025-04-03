import FakerHelpers from "helpers/faker/faker.helpers";

const fakerHelpers = new FakerHelpers();
const password = fakerHelpers.generatePassword();
const userName = fakerHelpers.generateName();

export const ct00_Data = {
    name: userName,
    lastName: fakerHelpers.generateLastName(),
    email: fakerHelpers.generateEmail(),
    password: password,
    confirmPassword: password,
    userName: userName,
};
