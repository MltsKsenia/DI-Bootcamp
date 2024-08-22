const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // To handle cross-origin requests
app.use(express.json()); // To parse JSON bodies

// GET request to /api/hello
app.get('/api/hello', (req, res) => {
    res.send({ message: "Hello From Express" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// POST request to /api/world
app.post('/api/world', (req, res) => {
    console.log('Received POST request:', req.body);
    const { postMessage } = req.body;
    res.send({ message: `I received your POST request. This is what you sent me: ${postMessage}` });
});