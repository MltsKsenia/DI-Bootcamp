// Exercise 3 : Is It A String ?
//     Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// Define the arrow function
const isString = (value) => typeof value === 'string';

// Test the function with different inputs
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString({ key: 'value' })); // false
console.log(isString('123')); // true
console.log(isString('')); // true
console.log(isString(null)); // false
console.log(isString(undefined)); // false
console.log(isString(true)); // false
