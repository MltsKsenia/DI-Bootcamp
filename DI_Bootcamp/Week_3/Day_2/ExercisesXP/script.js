// Exercise 1 //code
let favoriteFood = "coffee";
let favoriteMeal = "breakfast";
let food = "I drink " + favoriteFood + " at every " + favoriteMeal;

console.log(food)



// Exercise 2 //code
/// Part 1
let myWatchedSeries = ["black mirror", "money heis", "the big bang theory"];
let myWatchedSeriesLength = 3;
let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", " + "and " + myWatchedSeries[2];
let series = "I watched " + myWatchedSeriesLength + " series : " + myWatchedSeriesSentence;
console.log(series)

/// Part 2
myWatchedSeries[2] = "friends";
myWatchedSeries.push("the crown")
myWatchedSeries.splice(0, 1, "how i met your mother")
console.log(myWatchedSeries[1])
console.log(myWatchedSeries)



// Exercise 3 //code
let celcium = 20;
console.log(celcium + "°C")
let farengeit = (celcium * 9 / 5) + 32;
console.log(farengeit + "°F")



// Exercise 4 //code
let c;
let a = 34;
let b = 21;

console.log(a + b) //first expression
// Prediction: It will output 55, becouse a=34 and b=21, 34+21=55
// Actual: 55

a = 2;

console.log(a + b) //second expression
// Prediction: It will output 23, becouse a=2 and b=21, 2+21=23
// Actual: 23

console.log(c)
// "c" doesn't have any value, if we will do console.log(c) it will output "undefined"

console.log(3 + 4 + '5');
// It will output 75, because 3+4=7 and there is no space in '5'



// Exercise 5 //code
typeof (15)
// Prediction: number
// Actual: number

typeof (5.5)
// Prediction: number
// Actual: number

typeof (NaN)
// Prediction: number
// Actual: number

typeof ("hello")
// Prediction: string
// Actual: string

typeof (true)
// Prediction: boolean
// Actual: boolean

typeof (1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburger
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: hamburger

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5
// Actual: johnny5

"johnny" - 5
// Prediction: number
// Actual: number

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false



// Exercise 6 //code
5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: 1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

" " + " "
// Prediction: '  '
// Actual: '  '

" " + 0
// Prediction: ' 0'
// Actual: ' 0'

true + true
// Prediction: 2
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1