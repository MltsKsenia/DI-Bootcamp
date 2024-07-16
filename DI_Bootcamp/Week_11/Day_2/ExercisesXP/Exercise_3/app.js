const { readFile, writeFile } = require('./fileManager');

readFile('Hello World.txt', (err, data) => {
    if (err) {
        return console.error(`Error reading file: ${err.message}`);
    }
    console.log(`Content of 'Hello World.txt': ${data}`);
    writeFile('Bye World.txt', 'Writing to the file', (err) => {
        if (err) {
            return console.error(`Error writing to file: ${err.message}`);
        }
        console.log("Successfully wrote to 'Bye World.txt'");
    });
});

// node app.js
// Content of 'Hello World.txt': Hello World!!
// Successfully wrote to 'Bye World.txt'