import _ from 'lodash';
import { add, multiply } from './math.js';

const sum = add(5, 10);
const product = multiply(5, 10);

console.log(`Sum: ${sum}`);
console.log(`Product: ${product}`);

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = _.map(numbers, n => n * 2);

console.log(`Doubled Numbers: ${doubledNumbers}`);

// node app.js
// Sum: 15
// Product: 50
// Doubled Numbers: 2, 4, 6, 8, 10