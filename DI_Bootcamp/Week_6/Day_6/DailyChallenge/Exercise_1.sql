SELECT COUNT(*) AS actor_count FROM actors;

INSERT INTO actors (first_name, last_name, birthdate, number_oscars)
VALUES ('John', '', NULL, 0);

-- Error might be like this
-- ERROR:  null value in column "last_name" violates not-null constraint
-- DETAIL:  Failing row contains (7, John, , null, 0).
-- Answer
-- ERROR:  column "birthdate" in the table "actors" is not exist
-- LINE 3: INSERT INTO actors (first_name, last_name, birthdate, number...