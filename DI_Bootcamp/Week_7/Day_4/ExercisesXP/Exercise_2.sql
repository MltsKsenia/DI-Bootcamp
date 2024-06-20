UPDATE film
SET language_id = (SELECT language_id FROM language WHERE name = 'French')
WHERE title IN ('Chamber Italian', 'Grosse Wonderful');

SELECT * from customer WHERE (first_name='Kseni')
INSERT INTO customer(first_name, last_name, store_id, address_id)  VALUES('Kseni', 'Maltseva', 1, 1)

DROP TABLE IF EXISTS customer_review;

SELECT *
FROM rental
WHERE return_date IS NULL;

SELECT film.title, film.rental_rate
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.rental_rate DESC
LIMIT 30;

SELECT film.film_id, film.title FROM film_actor
	INNER JOIN film ON film.film_id=film_actor.film_id
	WHERE (actor_id=(SELECT actor_id FROM actor
	WHERE (first_name = 'Penelope' AND last_name = 'Monroe')
	AND film.fulltext @@ to_tsquery('english', 'sumo')
	))

SELECT * FROM film
	INNER JOIN film_category ON film.film_id=film_category.film_id
	INNER JOIN category ON category.category_id=film_category.category_id
	WHERE LENGTH<60 AND rating='R' AND category.name='Documentary'

SELECT * FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id=rental.customer_id
WHERE customer.first_name='Matthew'
AND customer.last_name='Mahan'
AND film.rental_rate > 4
AND rental.return_date > '2005-07-28'
AND rental.return_date < '2005-08-01'

SELECT * FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id=rental.customer_id
WHERE customer.first_name='Matthew'
AND customer.last_name='Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1








