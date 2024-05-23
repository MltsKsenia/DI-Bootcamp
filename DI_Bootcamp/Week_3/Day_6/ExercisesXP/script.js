/// Exercise 1 // List Of People
// Part 1
const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1)
console.log(people);
people.splice(2, 1, "Jason")
console.log(people);
people.push("Ksenia");
console.log(people);
console.log(people.indexOf("Mary"));
console.log(people.slice(1, 3));

// the method indexOf looking for a value that we requested
// if the method find the value it returns us the index number of this value
// if it's not, it will return us "-1" what means that the value that we requested is not found
console.log(people.indexOf("Foo"));

// the length always show us how many values we have in the array and not the index.
// index starts from 0 and the length from 1
let last = people[people.length - 1];
console.log(last);

console.log(' '); // I added a space to separate the exercises

// Part 2 // Loops
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
console.log(' ');
for (let x = 0; x < people.length; x++) {
    console.log(people[x])
    if (people[x] == "Devon") {
        break;
    }
}
console.log(' '); // I added a space to separate the exercises

/// Exercise 2 // Your Favorite Colors
const colors = ["Purple", "Pink", "Blue", "Green", "Yellow"];
for (let y = 0; y < colors.length; y++) {
    console.log('My ' + [y + 1] + ' choice is ' + colors[y]);
}
console.log(' ');
// Bonus
const suffixes = ["st", "nd", "rd", "th", "th"];
for (let y = 0; y < colors.length; y++) {
    if (colors[y] !== suffixes[y]) {
        suffixes.push("th");
    }
    console.log('My ' + [y + 1] + suffixes[y] + ' choise is ' + colors[y]);
}
console.log(' '); // I added a space to separate the exercises


/// Exercise 3 // Repeat The Question
// let num;
// do {
//     num = prompt("Please enter the number for the 3rd exercise");
//     num = Number(num)

//     if (typeof num === "number" && !isNaN(num)) {
//         if (num >= 10) {
//             alert("The number is greater or equal to 10. Thank You!");
//             break;
//         }
//         else if (num < 10) {
//             alert("The number is less than 10. Please try again.");
//             num = null;
//         }
//     }
//     else if (num != Number) {
//         alert("That is not a valid number. Please write a number.");
//         num = null;
//     }
// } while (num === null || num < 10);


/// Exercise 4 // Building Management
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}

console.log("The building has " + building.numberOfFloors + " floors");
console.log("On the floor 1 and 3 are " + (building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor) + " apartments in total");
console.log("The second tenant is " + building.nameOfTenants[1] + " and he has a " + building.numberOfRoomsAndRent.dan[0] + " rooms in his apartment");
if ((building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]) > building.numberOfRoomsAndRent.dan[1]) {
    building.numberOfRoomsAndRent.dan.splice(1, 1, 1200);
}
console.log(building.numberOfRoomsAndRent)

console.log(' '); // I added a space to separate the exercises

/// Exercise 5 // Family
const family = {
    Dad: "Yakov",
    Mom: "Sveta",
    Son: "Kosta",
    Daugter: "Ksenia"
};
for (let key in family) {
    console.log(key);
}
console.log(' '); // I added a space to separate the exercises
for (let key in family) {
    console.log(family[key]);
}

console.log(' '); // I added a space to separate the exercises


/// Exercise 6 // Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

let sen = '';
for (let key in details) {
    sen += key + ' ' + details[key] + ' ';
}
sen = sen.trim(); //deleted the last space in the sentence
console.log(sen);

console.log(' '); // I added a space to separate the exercises

/// Exercise 7 // Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let letters = names.map(name => name[0]);
let secretSoc = letters.join('');
console.log(secretSoc);