DROP DATABASE IF EXISTS typinggame_db;
CREATE DATABASE typinggame_db;

\c typinggame_db;

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY, 
--     username TEXT
--     email TEXT
--     password TEXT
-- );

DROP TABLE IF EXISTS code_snippets ;

CREATE TABLE code_snippets (
    id SERIAL PRIMARY KEY, 
    difficulty NUMBER
    snippet TEXT
 
);

-- DROP TABLE IF EXISTS game_stats;

-- CREATE TABLE game_stats (
--     id SERIAL PRIMARY KEY, 
--     percentage NUMBER
--     wpm NUMBER
--     correct NUMBER
--     incorrect NUMBER
--     missed NUMBER
   
-- );


