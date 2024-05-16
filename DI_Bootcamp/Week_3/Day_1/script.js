// Exercise 1 //code
let adresNumber = 15;
let adresStreet = "Rubinstein";
let country = "Israel";

let globalAdres = "I live in " + adresNumber + " " + adresStreet + " in " + country

console.log(globalAdres)

// Exercise 2 //code
let birthYear = 1996;
let futureYear = 2050;
let age = futureYear - birthYear;

let answer = "I will be " + age + " in " + futureYear;

console.log(answer)

// Exercise 3 //code
let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow'];
console.log(pets[1])
pets.push("horse")
console.log(pets)
pets.splice(3, 1, "horse")
pets.splice(5, 1)
console.log(pets)