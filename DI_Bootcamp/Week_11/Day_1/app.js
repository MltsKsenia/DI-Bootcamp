// const script = require('./script.js');
// const a = script.largeNumber;
// const b = 4;
// console.log(a + b);

// const c = require('http');
// console.log(c);

const fs = require('fs');
const { compact } = require('lodash');
fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('errroooorrr');
    }
    console.log('Async', data.toString('utf8'));
})

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

// APPEND
// fs.appendFile('./hello.txt', ' This is so cool!', err => {
//     if (err) {
//         console.log(err);
//     }
// })

fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if (err) {
        console.log(err)
    }
})

// DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Inception')
})