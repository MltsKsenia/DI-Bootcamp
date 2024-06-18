SELECT * FROM customer
	
SELECT first_name, last_name AS full+_name FROM customer
	
SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate 
FROM film 
ORDER BY rental_rate ASC;

SELECT address, phone 
FROM address 
WHERE district = 'Texas';

SELECT * FROM film 
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Inception';

SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title LIKE 'In%';

SELECT film_id, title, description, rental_rate 
FROM film 
ORDER BY rental_rate ASC 
LIMIT 10;

WITH CheapestMovies AS (
    SELECT film_id, title, description, rental_rate, 
           ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS row_num
    FROM film
)
SELECT film_id, title, description, rental_rate 
FROM CheapestMovies 
WHERE row_num BETWEEN 11 AND 20;

SELECT c.first_name, c.last_name, p.amount, p.payment_date 
FROM customer c 
JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY c.customer_id;

SELECT f.film_id, f.title, f.description 
FROM film f 
LEFT JOIN inventory i ON f.film_id = i.film_id 
WHERE i.film_id IS NULL;

SELECT ci.city, co.country 
FROM city ci 
JOIN country co ON ci.country_id = co.country_id;

SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id 
FROM customer c 
JOIN payment p ON c.customer_id = p.customer_id 
ORDER BY p.staff_id;
