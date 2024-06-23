// #1
function funcOne() {
    let a = 5; // a is declared using let and is equal to 5.
    if (a > 1) {
        a = 3; // a is reassigned to 3 since 5 > 1.
    }
    alert(`inside the funcOne function ${a}`); // The alert will show: inside the funcOne function 3
}

// #1.1 - run in the console:
funcOne() // It's 3
// #1.2 What will happen if the variable is declared with const instead of let ?
// If a is declared with const, it cannot be reassigned, so attempting to set a = 3 will throw a TypeError.



//#2
let a = 0; // a is declared using let and is equal to 0
function funcTwo() {
    a = 5; // reassigned to 5.
}

function funcThree() {
    alert(`inside the funcThree function ${a}`); // The alert will show the current value of the global a.
}

// #2.1 - run in the console:
funcThree() // Prediction: inside the funcThree function 0
funcTwo() // This changes the global a to 5.
funcThree() // Prediction: inside the funcThree function 5

// #2.2 What will happen if the variable is declared with const instead of let ?
// If a is declared with const, it cannot be reassigned, so attempting to set a = 5 in funcTwo will throw a TypeError.



//#3
function funcFour() {
    window.a = "hello"; // a is set as a property on the global window object.
}

function funcFive() {
    alert(`inside the funcFive function ${a}`); // The alert will show the global window.a.
}

// #3.1 - run in the console:
funcFour() // This sets window.a to "hello".
funcFive() // Prediction: inside the funcFive function hello



//#4
let a = 1; // a is declared using let and is equal to 1.
function funcSix() {
    let a = "test";  // a is declared within the function scope and initialized to "test".
    alert(`inside the funcSix function ${a}`); // The alert will show the local a.
}


// #4.1 - run in the console:
funcSix() // Prediction: inside the funcSix function test

// #4.2 What will happen if the variable is declared with const instead of let ?
// If a is declared with const inside funcSix, it will still work because const allows for block-scoped declaration and initialization, and it will not affect the outer a.



//#5
let a = 2; // a is declared using let and is equal to 2.
if (true) {
    let a = 5; // a is declared within the if block and initialized to 5.
    alert(`in the if block ${a}`); // The alert will show the local a.
}
alert(`outside of the if block ${a}`); // The alert will show the global a.

// #5.1 - run the code in the console
// Prediction: in the if block 5
// Prediction: outside of the if block 2

// #5.2 What will happen if the variable is declared  with const instead of let ?
// If a is declared with const inside the if block, it will still work because const allows for block-scoped declaration. The value inside the if block will be 5, and outside the if block will be 2.