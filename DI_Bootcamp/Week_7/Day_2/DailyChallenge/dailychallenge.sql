CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
	
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab
-- id  |  name  
-------+---------
--  5  | Pawan
--  6  | Sharlee
--  7  | Krish
-- NULL| Avtaar
	
CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab
-- the output will be
--id  
------
--5  
--NULL 

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--0 there is no row matchig but due to the null

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
--2 because the row wil id=null is not considered

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
--0 there is no row matchig but due to the null

SELECT COUNT(*) FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )
--2 because the row wil id=null is not considered