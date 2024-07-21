const express = require('express');
const app = express();

app.use(express.json());

let books = [
    { id: 1, title: '1984', author: 'George Orwell', publishedYear: 1949 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 }
];

app.get('/api/books', (req, res) => res.json(books));

app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    book ? res.json(book) : res.status(404).json({ error: 'Book not found' });
});

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
        return res.status(400).json({ error: 'All fields (title, author, publishedYear) are required' });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(4000);