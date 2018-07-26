export interface IPerson {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profileUrl: string;

    getFullName(): string;
}

export class Person implements IPerson {

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profileUrl: string;

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
