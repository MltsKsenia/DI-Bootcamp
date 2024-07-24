const express = require('express');
const app = express();
const { fetchPosts } = require('./data/dataService.js');

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        console.log('Data has been successfully retrieved and sent as a response');
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
app.listen(5000);

// http://localhost:5000/api/posts