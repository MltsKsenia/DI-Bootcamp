import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from './selectors';

const BookList = () => {
    const [selectedGenre, setSelectedGenre] = useState('Horror');

    const horrorBooks = useSelector(selectHorrorBooks);
    const fantasyBooks = useSelector(selectFantasyBooks);
    const scienceFictionBooks = useSelector(selectScienceFictionBooks);

    let booksToDisplay;
    if (selectedGenre === 'Horror') {
        booksToDisplay = horrorBooks;
    } else if (selectedGenre === 'Fantasy') {
        booksToDisplay = fantasyBooks;
    } else if (selectedGenre === 'Science Fiction') {
        booksToDisplay = scienceFictionBooks;
    }

    return (
        <div>
            <h1>Book Inventory</h1>
            <div>
                <label>Select Genre:</label>
                <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
                    <option value="Horror">Horror</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Science Fiction">Science Fiction</option>
                </select>
            </div>
            <ul>
                {booksToDisplay.map((book) => (
                    <li key={book.id}>
                        {book.title} by {book.author} (Genre: {book.genre})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;