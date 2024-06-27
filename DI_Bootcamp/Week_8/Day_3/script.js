/** Arrays */

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */

function map(arr) {
    arr.forEach((item, i, arr2) => {
        arr2[i] = item * 2;
    });
    return [...arr];
}

function map2(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

let arr = [1, 2, 3, 4];
/** map method */
let arr2 = arr.map((item) => {
    if (item > 2) {
        return item * 2;
    }
    return -1;
});
// console.log(arr2);

// let users = [
//   { userid: 1, name: "John", email: "jjj@gmail.com" },
//   { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//   { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   { userid: 3, name: "Anne", email: "aaa@gmail.com" },
// ];

// let html = users.map((item) => {
//   return `<div style="display:inline-block;">
//         <h2>${item.userid}</h2>
//         <h2>${item.name}</h2>
//         <h2>${item.email}</h2>
//     </div>`;
// });

// // console.log(html);
// document.getElementById("root").innerHTML = html.join("");

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

function filter(arr) {
    let newArr = [];
    for (item of arr) {
        if (item > 3) newArr.push(item);
    }
    return newArr;
}

let arr3 = [0, 1, 1, 2, 3, 5, 8];

let arr4 = arr3.filter((item) => {
    return item > 3;
});
// console.log(arr4);

const users = [
    { id: 1, name: "John", email: "jjj@gmail.com" },
    { id: 2, name: "Mor", email: "mmm@gmail.com" },
    { id: 3, name: "Marry", email: "marry@gmail.com" },
    { id: 4, name: "Ron", email: "ron@gmail.com" },
];

// 'r' in the name and 'r' in the email
let filterArr = users.filter((item) => {
    return (
        item.name.toLowerCase().includes("r") &&
        item.email.toLowerCase().includes("r")
    );
});
// console.log(filterArr);

// get the user object with id equal to 3
const user2 = users.find((item) => item.id === 9);
// console.log(user2);

/** findIndex */
const user3 = users.findIndex((item) => item.id === 9);
// console.log(user3);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

function reduce(arr, num = 0) {
    let sum = num;
    arr.forEach((item) => {
        sum += item;
    });
    return sum;
}
// console.log(reduce([2, 5, 10, 100], 100));

/** reduce */
let arr5 = [2, 5, 10, 100];
let sumOfArr5 = arr5.reduce((a, b) => {
    return a + b;
}, 100);

// console.log(sumOfArr5);

/** destructuring */
let newArr = [1, 2, 3];
// let a = newArr[0];
// let b = newArr[1];
// let c = newArr[2];

// let [a, c, b] = [1, 2, 3];
// console.log(a, b, c);

/** rest parameters */
let newNewArr = [1, 2, 3, 4, 5, 6];

let [a, b, ...rest] = newNewArr;
// console.log(a, b, rest);

/** spread oporator */
let aa = 5;
let bb = 6;
let cc = [4, 1];

let dd = [aa, ...cc, bb];
// console.log(dd);

/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow

hint: how to find the max number in a givven array?
*/

function birthdayCakeCandles(arr) {
    let maxNum = Math.max(...arr);
    //   console.log(maxNum);
    return arr.filter((item) => item === maxNum).length;
}
console.log(birthdayCakeCandles([2, 8, 4, 4, 8, 1, 8]));


// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
