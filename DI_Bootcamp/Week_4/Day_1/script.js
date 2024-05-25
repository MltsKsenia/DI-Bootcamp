// Exercise 1
function ParentsAge(myAge) {
    const mumAge = myAge * 2;
    const dadAge = mumAge * 1.2;
    console.log(`My mum's age is ${mumAge}`);
    console.log(`My dad's age is ${dadAge}`);
}

ParentsAge(28);

// Exercise 2
function calculateMumAge(mAge) {
    return mAge * 2;
}
const mAge = 28;
const momAge = calculateMumAge(mAge);

console.log(`My mum's age is ${momAge}`);