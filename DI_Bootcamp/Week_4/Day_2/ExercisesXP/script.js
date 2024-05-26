/// Exercise 1 // Information
// Part 1
function infoAboutMe() {
    console.log("My name is Ksenia, I'm 28 years old, my favorit color is purple, and my hobbies are gaming, anime and coding.");
}
infoAboutMe()

// Part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("Your name is " + personName + ", you are " + personAge + " years old, and your favorite color is " + personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

///Exercise 2 // Tips
function calculateTip() {
    let amount = prompt("For Exercise 2. What the amount of the bill in $?");
    amount = Number(amount)
    let tip;

    if (amount < 50) {
        tip = amount * 0.20;
    }
    else if (amount >= 50 && amount < 200) {
        tip = amount * 0.15;
    }
    else if (amount >= 200) {
        tip = amount * 0.10;
    }
    let finalBill = amount + tip;
    console.log("The tip amount will be " + tip + ", and the final bill is " + finalBill);
}
calculateTip();


/// Exercise 3 // Find The Numbers Divisible By 23
function isDivisible(divisor = 23) {
    let sum = 0;
    let divisibleNumbers = [];
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            divisibleNumbers.push(i);
            sum += i;
        }
    }
    console.log("Numbers divisible by " + divisor + ": " + divisibleNumbers.join(' '));
    console.log("Sum: " + sum);
}
isDivisible();
isDivisible(3);
isDivisible(45);


/// Exercise 4 // Shopping List
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

const shoppingList = ["banana", "orange", "apple"];
function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    }
    return total;
}
const totalBill = myBill();
console.log("The total price will be" + totalBill);
console.log("Updated stock:", stock);

/// Exercise 5 // What’s In My Wallet ?
function changeEnough(itemPrice, amountOfChange) {
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    let totalAmount =
        (amountOfChange[0] * quarterValue) +
        (amountOfChange[1] * dimeValue) +
        (amountOfChange[2] * nickelValue) +
        (amountOfChange[3] * pennyValue);

    return totalAmount >= itemPrice;
}
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));



///Exercise 6 // Vacations Costs
function hotelCost() {
    let nights;
    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        nights = parseInt(nights);
        if (!isNaN(nights) && nights > 0) {
            break;
        }
        alert("Please enter a valid number of nights.");
    }
    const costPerNight = 140;
    return nights * costPerNight;
}
function planeRideCost() {
    let destination;
    while (true) {
        destination = prompt("What is your destination?");
        if (destination && isNaN(destination)) {
            break;
        }
        alert("Please enter a valid destination.");
    }
    if (destination.toLowerCase() === "london") {
        return 183;
    } else if (destination.toLowerCase() === "paris") {
        return 220;
    } else {
        return 300;
    }
}
function rentalCarCost() {
    let days;
    while (true) {
        days = prompt("How many days would you like to rent the car?");
        days = parseInt(days);
        if (!isNaN(days) && days > 0) {
            break;
        }
        alert("Please enter a valid number of days.");
    }
    const costPerDay = 40;
    let cost = days * costPerDay;
    if (days > 10) {
        cost *= 0.95; // Apply 5% discount
    }
    return cost;
}
function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();
    const totalCost = hotel + plane + car;
    console.log("The car cost: " + car + ", the hotel cost: " + hotel + ", the plane tickets cost: " + plane);
    console.log("The total cost of the vacation is " + totalCost);
}
totalVacationCost();
