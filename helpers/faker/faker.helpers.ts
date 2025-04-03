import { faker } from "@faker-js/faker";

export default class FakerHelpers {

    public generateName(): string {
        return faker.person.firstName();
    }

    public generateLastName(): string {
        return faker.person.lastName();
    }

    public generateEmail(): string {
        return faker.internet.email();
    }

    public generatePassword(): string {
        return faker.internet.password();
    }
}