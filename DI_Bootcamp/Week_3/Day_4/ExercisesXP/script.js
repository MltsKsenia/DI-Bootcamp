// Exercise 1 //Simple If/Else Statement
let x = 5;
let y = 2;

if (x > y) {
    console.log("x is the biggest number")
}
else if (y > x) {
    console.log("y is the biggest number")
}
else if (x === y) {
    console.log("x is equals y")
}

// Exercise 2 //Chihuahua
let newDog = "Chihuahua";
let letters = newDog.length;
console.log("The number of letters in " + newDog + " is: " + letters);
console.log(newDog.toUpperCase() + " " + newDog.toLowerCase());
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it's my favorite dog breed")
}
else if (newDog != "Chihuahua") {
    console.log("I dont care, I prefer cats")
}

// Exercise 3 //Even Or Odd
let userInput = prompt("Please enter a numner for exercise 3");
x = Number(userInput);
if (x % 2 === 0) {
    console.log(x + " is an even number");
}
else {
    console.log(x + " is an odd number");
}

// Exercise 4 //Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "pololopo"];
if (users.length === 0) {
    console.log("no one is online");
}
else if (users.length === 1) {
    console.log(`${users[0]} is online`);
}
else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
}
else if (users.length > 2) {
    const additionalUsers = users.length - 2;
    console.log(`${users[0]}, ${users[1]} and ${additionalUsers} more are online`);
}
