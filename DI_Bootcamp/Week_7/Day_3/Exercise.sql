drop table products;
drop table products_desc;

CREATE TABLE PRODUCTS (
	id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL,
	price integer NOT NULL
);

INSERT INTO 
	products (price, name)
VALUES
	(700, 'iPad'),
	(800, 'iPhone'),
	(600, 'iWatch'),
	(900, 'iCar');

--delete from table
delete from products where id = 4

--delete all rows
delete from products

--this delete everything
truncate table products

-- foriefn key
	CREATE TABLE products_desc (
	id serial PRIMARY KEY,
	description VARCHAR (500),
	product_id integer,
	CONSTRAINT fk_products
		FOREIGN KEY (product_id)
			REFERENCES products(id)
				ON DELETE SET NULL
);

INSERT INTO 
    products_desc (description, product_id)
VALUES
	('Amazing iPad' ,5),	
	('Great iPhone' ,6),
	('Best iWatch' ,7),
	('Fastest car ever iCar' ,8);

select * from products;
select * from products_desc;

delete from products where id = 5;

--cascade
alter table products_desc
drop constraint fk_products

alter table products_desc
add constraint fk_products
 foreign key (product_id)
	references products (id)
-- on delete /update
-- no action

delete from products where id = 6;