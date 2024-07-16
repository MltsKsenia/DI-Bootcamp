import fs from 'fs';

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source.txt:', err);
        return;
    }
    if (data.charCodeAt(0) === 0xFEFF) {
        data = data.slice(1);
    }
    console.log('source.txt content:', data);

    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing to destination.txt:', err);
            return;
        }
        console.log('Content copied from source.txt to destination.txt');
    });
});

