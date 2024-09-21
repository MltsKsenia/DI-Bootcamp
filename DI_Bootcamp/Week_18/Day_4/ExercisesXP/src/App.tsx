import React from 'react';
import PersonInfo from './Exercise_1/PersonInfo';
import { PersonWithAddress } from './Exercise_1/types';
import describeValue from './Exercise_2/describeValue';
import './Exercise_3/typeCastingExample';
import getFirstElement from './Exercise_4/getFirstElement';
import logLength from './Exercise_5/logLength';
import describeEmployee from './Exercise_6/describeEmployee';
import { Employee } from './Exercise_6/types';
import formatInput from './Exercise_7/formatInput';


const App: React.FC = () => {
  // Exercise 1
  const person: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York",
  };

  // Exercise 2
  const testNumber = 42;
  const testString = "Hello, World!";

  // Exercise 3
  let someValue: any = "Hello, TypeScript!";
  let strLengthAs: number = (someValue as string).length;

  // Exercise 4
  const mixedArray = ["hello", 42];
  const numberArray = [100, "world"];

  // Exercise 5
  const str = "Hello, TypeScript!";
  const arr = [1, 2, 3, 4, 5];
  const obj = { length: 10 };

  // Exercise 6
  const manager: Employee = {
    name: "Alice",
    age: 40,
    position: "Manager",
    department: "HR"
  };

  const developer: Employee = {
    name: "Bob",
    age: 30,
    position: "Developer",
    department: "Engineering"
  };

  const otherEmployee: Employee = {
    name: "Charlie",
    age: 25,
    position: "Designer",
    department: "Creative"
  };

  // Exercise 7
  const stringInput = "   hello world   ";
  const numberInput = 12345;
  const dateInput = new Date();

  return (
    <div>
      <h2>Exercise 1</h2>
      <h3>Person Information</h3>
      <PersonInfo person={person} />

      <h2>Exercise 2</h2>
      <h3>Type Guard Example</h3>
      <p>{describeValue(testNumber)}</p>
      <p>{describeValue(testString)}</p>

      <h2>Exercise 3</h2>
      <h3>Type Casting Example</h3>
      <p>String length using 'as': {strLengthAs}</p>

      <h2>Exercise 4</h2>
      <h3>Type Assertions Example</h3>
      <p>First element from ["hello", 42]: {getFirstElement(mixedArray)}</p>
      <p>First element from [100, "world"]: {getFirstElement(numberArray)}</p>

      <h2>Exercise 5</h2>
      <h3>Generic Constraints Example</h3>
      <p>String length: {logLength(str)}</p>
      <p>Array length: {logLength(arr)}</p>
      <p>Object with length property: {logLength(obj)}</p>

      <h2>Exercise 6</h2>
      <h3>Employee Descriptions</h3>
      <p>{describeEmployee(manager)}</p>
      <p>{describeEmployee(developer)}</p>
      <p>{describeEmployee(otherEmployee)}</p>

      <h2>Exercise 7</h2>
      <h3>Formatted Inputs</h3>
      <p>{formatInput(stringInput)}</p>
      <p>{formatInput(numberInput)}</p>
      <p>{formatInput(dateInput)}</p>
    </div>
  );
};

export default App;
