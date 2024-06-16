SELECT * FROM actors

SELECT * FROM actors LIMIT 4;
SELECT * FROM actors ORDER BY last_name DESC LIMIT 4;
SELECT * FROM actors WHERE first_name LIKE '%e%';
SELECT * FROM actors WHERE number_oscars >= 5;

UPDATE actors
SET first_name = 'Maty'
WHERE first_name = 'Matt' AND last_name = 'Damon';

UPDATE actors
SET number_oscars = 4
WHERE first_name = 'George' AND last_name = 'Clooney';

SELECT * FROM actors
WHERE first_name = 'George' AND last_name = 'Clooney';

ALTER TABLE actors
RENAME COLUMN age TO birthdate;

DELETE FROM actors
WHERE first_name = 'Sandra' AND last_name = 'Bullock'
RETURNING *;