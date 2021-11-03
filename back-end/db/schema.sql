DROP DATABASE IF EXISTS typinggame_db;
CREATE DATABASE typinggame_db;

\c typinggame_db;

DROP TABLE IF EXISTS code_snippets ;

CREATE TABLE code_snippets (
    id SERIAL PRIMARY KEY, 
    difficulty NUMERIC,
    snippet TEXT
);



