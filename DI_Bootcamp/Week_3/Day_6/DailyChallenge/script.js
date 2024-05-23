// first by using one loop
let star = '';

for (let i = 1; i <= 6; i++) {
    star += '* ';
    console.log(star);
}

console.log(' '); // I added a space to separate the exercises
// second by using two nested for loops

for (let x = 1; x <= 6; x++) {
    let stars = '';
    for (let y = 1; y <= x; y++) {
        stars += '* ';
    }
    console.log(stars);
}
