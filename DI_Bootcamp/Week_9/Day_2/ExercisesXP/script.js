// Exercise 1 : Location
// Instructions
// Analyze the code below.What will be the output?
const person = {
    Name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const { Name, location: { country, city, coordinates: [lat, lng] } } = person;

// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
console.log(`I am ${Name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


//Exercise 2: Display Student Info
// Instructions

function displayStudentInfo(objUser) {
    //destructuring
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' });

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// output : 'Your full name is Elie Schoppik'

function displayStudentInfo({ first, last }) {
    return `Your full name is ${first} ${last}`;
}

console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));


//Exercise 3: User & Id
// Instructions
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [['user1', 18273], ['user2', 92833], ['user3', 90315]]
// FYI: The number is their ID number.
const userArray = Object.entries(users);
console.log(userArray);

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [['user1', 36546], ['user2', 185666], ['user3', 180630]]
const updatedUserArray = userArray.map(([user, id]) => [user, id * 2]);
console.log(updatedUserArray);


//Exercise 4 : Person Class
// Instructions
// Analyze the code below.What will be the output ?
class Person {
    constructor(name) {
        this.name = name;
    }
}
const member = new Person('John');
console.log(typeof member);
//The provided code defines a class Person and creates an instance of it. The console.log statement then checks the type of the member instance.
// if we use typeof the output will be 'object', if we will cut the 'typeof' it will show us 'Person {fname: 'John'}


//Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
    constructor(name) {
        this.name = name;
    }
};
// Analyze the options below.Which constructor will successfully extend the Dog class?
// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };


// 2
class Labrador extends Dog {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
};
// This option correctly calls super(name) to initialize the name property in the Dog class.
// Then, it sets the size property for the Labrador class.
// This constructor will successfully extend the Dog class.

// 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };


// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };


// Exercise 6 : Challenges
// Evaluate these(ie True or False)

// [2] === [2]
// false
// When you create two arrays with the same content, they are stored in different memory locations. Comparing their references using === results in false.
// { } === {}
// false
// Two different objects with the same content are stored in different memory locations. Comparing their references using === results in false.


// What is, for each object below, the value of the property number and why ?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5


// Create a class Animal with the attributes name, type and color.The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound().This method takes a parameter: the sound the animal makes, and returns the details of the animal(name, type and color) as well as the sound it makes.
class Mamal extends Animal {
    sound(animalSound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. I say: ${animalSound}`;
    }
}
// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('moos'));
