// Exercise 1 //Favorite Color
let sentence = ["my ", "favorite ", "color ", "is ", "blue"];
console.log(sentence.join(""))

// Exercise 2 //Mixup
let str1 = "mix";
let str2 = "pod";
let newStr1 = str2.slice(0, 2) + str1.slice(2);
let newStr2 = str1.slice(0, 2) + str2.slice(2);
let str3 = newStr1 + " " + newStr2;
console.log(str3);

// Exercise 3 //Calculator
let num1 = prompt("Enter the first number:");
num1 = Number(num1);
console.log("Type of num1:", typeof num1);
let num2 = prompt("Enter the second number:");
num2 = Number(num2);
console.log("Type of num2:", typeof num2);
let operation = prompt("Enter the operation (+, -, *, /):");
let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
}
alert("The result is: " + result);
