export type Person = {
    name: string;
    age: number;
};

export type Job = {
    position: string;
    department: string;
};

export type Employee = Person & Job;