const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const emojis = [
    { emoji: '😀', name: 'smile' },
    { emoji: '🐶', name: 'dog' },
    { emoji: '🌮', name: 'taco' }
];

let playerScore = 0;

app.get('/emoji', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const correctEmoji = emojis[randomIndex];

    res.json({
        emoji: correctEmoji.emoji,
        name: correctEmoji.name
    });
});

app.post('/guess', (req, res) => {
    const { emoji, guess } = req.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);

    if (correctEmoji && correctEmoji.name === guess) {
        playerScore++;
        res.json({ correct: true, score: playerScore });
    } else {
        res.json({ correct: false, score: playerScore });
    }
});

app.get('/score', (req, res) => {
    res.json({ score: playerScore });
});

app.listen(3000);