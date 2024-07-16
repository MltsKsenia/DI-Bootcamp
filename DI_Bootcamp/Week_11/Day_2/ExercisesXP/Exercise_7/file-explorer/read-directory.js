import fs from 'fs';

fs.readdir('.', (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    console.log('Files in directory:');
    files.forEach(file => {
        console.log(file);
    });
});

// Files in directory:
// copy - file.js
// destination.txt
// package.json
// read - directory.js
// source.txt