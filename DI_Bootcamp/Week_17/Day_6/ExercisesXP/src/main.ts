import './style.css'


// Exercise 1
console.log("Hello, World!");

// Exercise 2
let age: number = 25;
let name: string = "John Doe";
console.log("Age:", age);
console.log("Name:", name);

// Exercise 3
let id: string | number;
id = "123ABC";
console.log("ID (as string):", id);
id = 456;
console.log("ID (as number):", id);

// Exercise 4
function checkNumber(value: number): string {
  if (value > 0) {
    return "The number is positive.";
  } else if (value < 0) {
    return "The number is negative.";
  } else {
    return "The number is zero.";
  }
}

console.log(checkNumber(10));  // Positive number
console.log(checkNumber(-5));  // Negative number
console.log(checkNumber(0));   // Zero

// Exercise 5
function getDetails(name: string, age: number): [string, number, string] {
  const greeting = `Hello, ${name}! You are ${age} years old.`;
  return [name, age, greeting];
}

const details = getDetails("Alice", 25);
console.log(details); // Output: ['Alice', 25, 'Hello, Alice! You are 25 years old.']

// Exercise 6
type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return {
    name: name,
    age: age
  };
}

const person = createPerson("Bob", 30);
console.log(person); // Output: { name: 'Bob', age: 30 }

// Exercise 7
const nameInput = document.getElementById('nameInput') as HTMLInputElement;
const setNameButton = document.getElementById('setNameButton') as HTMLButtonElement;
const nameDisplay = document.getElementById('nameDisplay') as HTMLParagraphElement;

setNameButton.addEventListener('click', () => {
  const name = nameInput.value;

  nameDisplay.textContent = `Hello, ${name}!`;
});

// Exercise 8
function greet(): string;
function greet(name: string): string;

function greet(name: string = 'Guest'): string {
  return `Hello, ${name}!`;
}

console.log(greet());         // Output: Hello, Guest!
console.log(greet("Alice"));  // Output: Hello, Alice!