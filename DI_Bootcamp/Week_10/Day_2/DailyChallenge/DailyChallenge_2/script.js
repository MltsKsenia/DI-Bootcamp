const morse = `{
            "0": "-----",
            "1": ".----",
            "2": "..---",
            "3": "...--",
            "4": "....-",
            "5": ".....",
            "6": "-....",
            "7": "--...",
            "8": "---..",
            "9": "----.",
            "a": ".-",
            "b": "-...",
            "c": "-.-.",
            "d": "-..",
            "e": ".",
            "f": "..-.",
            "g": "--.",
            "h": "....",
            "i": "..",
            "j": ".---",
            "k": "-.-",
            "l": ".-..",
            "m": "--",
            "n": "-.",
            "o": "---",
            "p": ".--.",
            "q": "--.-",
            "r": ".-.",
            "s": "...",
            "t": "-",
            "u": "..-",
            "v": "...-",
            "w": ".--",
            "x": "-..-",
            "y": "-.--",
            "z": "--..",
            ".": ".-.-.-",
            ",": "--..--",
            "?": "..--..",
            "!": "-.-.--",
            "-": "-....-",
            "/": "-..-.",
            "@": ".--.-.",
            "(": "-.--.",
            ")": "-.--.-"
        }`;

function toJs() {
    return new Promise((resolve, reject) => {
        const morseJS = JSON.parse(morse);
        if (Object.keys(morseJS).length === 0) {
            reject('Error: The Morse code JavaScript object is empty!');
        } else {
            resolve(morseJS);
        }
    });
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = document.getElementById('inputText').value.toLowerCase();
        const morseTranslation = [];

        for (let char of input) {
            if (morseJS[char]) {
                morseTranslation.push(morseJS[char]);
            } else {
                reject(`Error: Character "${char}" doesn't exist in the Morse code JavaScript object!`);
                return;
            }
        }

        resolve(morseTranslation);
    });
}

function joinWords(morseTranslation) {
    const output = morseTranslation.join('\n');
    document.getElementById('output').innerText = output;
}

document.getElementById('convertButton').addEventListener('click', () => {
    toJs()
        .then(morseJS => toMorse(morseJS))
        .then(morseTranslation => joinWords(morseTranslation))
        .catch(error => console.error(error));
});