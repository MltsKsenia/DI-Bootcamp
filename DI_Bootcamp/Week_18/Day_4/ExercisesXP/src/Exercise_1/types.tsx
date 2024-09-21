export type Person = {
    name: string;
    age: number;
};

export type Address = {
    street: string;
    city: string;
};
export type PersonWithAddress = Person & Address;
