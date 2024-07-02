// const result = Object.keys(users)
//   .filter((key) => users[key].age > 30)
//   .map((id) => ({ id, ...users[id] }));

// console.log("result=>", result);

/** Class */
class nameOfClass {
    constructor() {
        // ...
    }
    method1() { }
    method2() { }
}

class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    getName() {
        return this.name;
    }
    getType() {
        return this.type;
    }
    setName(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Dog");
    }
    getNameAndType() {
        return "Dog Name:" + this.name + " Dog Type:" + this.type;
    }
    getName() {
        return "My name is " + this.name;
    }
}

// const animal1 = new Animal()

const dog1 = new Dog("Shadow");
dog1.setName("KuKu");
console.log(dog1.getNameAndType());

const dog2 = new Dog("Bobo");
console.log(dog2.getName(), dog2.getType());

// const dog1 = new Animal('Bob', 'Dog');
// console.log(dog1.getName());
// console.log(dog1.getType());

// const cat1 = new Animal('Chichi', 'Cat');
// // dog2.setName('Cow')
// console.log(cat1.getName());
// console.log(cat1.getType());
// cat1.setName('Shushi')
// console.log(cat1.getName());

/**
 * Create a User class
 * Store the name of the user in a "name" variable
 * Add hello method that will log 'Hello' and the name of the user
 * Create a Student class that exextends User
 * Create 3 instances of Student class, add them to an Array
 * Loop the array and call hello method
 */

class User {
    constructor(name) {
        this.name = name;
    }

    hello() {
        console.log("Hello " + this.name);
    }
}

class Student extends User {
    constructor(name) {
        super(name);
    }
}

let allUsers = [];

let student1 = new Student("John");
let student2 = new Student("Mike");
let student3 = new Student("Carl");

allUsers.push(student1, student2, student3);

console.log(allUsers);

allUsers.forEach((element) => element.hello());
