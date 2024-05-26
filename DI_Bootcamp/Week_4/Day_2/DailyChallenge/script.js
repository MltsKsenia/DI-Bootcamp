let userInput = prompt("Please enter several words, separated by commas:");

let wordsArray = userInput.split(',').map(word => word.trim());

let longestWordLength = wordsArray.reduce((max, word) => Math.max(max, word.length), 0);
let frameWidth = longestWordLength + 4;

function createFrameLine(char, length) {
    return char.repeat(length);
}
console.log(createFrameLine('*', frameWidth));

for (let word of wordsArray) {
    let padding = ' '.repeat(longestWordLength - word.length);
    console.log(`* ${word}${padding} *`);
}
console.log(createFrameLine('*', frameWidth));