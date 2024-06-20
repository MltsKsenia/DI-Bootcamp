SELECT * FROM language;

SELECT film.title, film.description, language.name 
FROM film 
JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name 
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name) VALUES
('Inception'),
('Interstellar'),
('The Matrix');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(100),
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text) VALUES
((SELECT id FROM new_film WHERE name = 'Inception'), (SELECT language_id FROM language WHERE name = 'English'), 'Great Movie!', 9, 'Inception is a mind-bending thriller.'),
((SELECT id FROM new_film WHERE name = 'Interstellar'), (SELECT language_id FROM language WHERE name = 'English'), 'Epic Space Adventure', 10, 'Interstellar is a visually stunning film with a great story.');

DELETE FROM new_film WHERE name = 'Inception';

SELECT * FROM customer_review;
