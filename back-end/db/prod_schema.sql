\c production_database_name;

-- DROP TABLE IF EXISTS typing_game;

-- CREATE TABLE typing_game (
--     id SERIAL PRIMARY KEY, 
    
   
-- );

DROP TABLE IF EXISTS username;

CREATE TABLE username (
    id SERIAL PRIMARY KEY, 
    username TEXT
    email TEXT
    password TEXT
);

DROP TABLE IF EXISTS code_snippets ;

CREATE TABLE code_snippets (
    id SERIAL PRIMARY KEY, 
    difficulty NUMBER
    snippet TEXT
 
);

DROP TABLE IF EXISTS game_stats;

CREATE TABLE game_stats (
    id SERIAL PRIMARY KEY, 
    percentage NUMBER
    wpm NUMBER
    correct NUMBER
    incorrect NUMBER
    missed NUMBER
   
);