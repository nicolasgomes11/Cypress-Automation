import { faker } from "@faker-js/faker";

export default class FakerHelpers {
    public generateTitle(): string {
        return faker.company.name();
    }

    public generateImageLink(): string {
        return faker.image.url();
    }
}
