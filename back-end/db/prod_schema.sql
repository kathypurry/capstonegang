\c dbdovavbhl8c03;

-- DROP TABLE IF EXISTS users;

-- CREATE TABLE users (
--     id SERIAL PRIMARY KEY, 
--     username TEXT,
--     email TEXT,
--     password TEXT
-- );

DROP TABLE IF EXISTS code_snippets ;

CREATE TABLE code_snippets (
    id SERIAL PRIMARY KEY, 
    difficulty NUMERIC,
    snippet TEXT
);

-- DROP TABLE IF EXISTS game_stats;

-- CREATE TABLE game_stats (
--     id SERIAL PRIMARY KEY, 
--     percentage NUMBER,
--     wpm NUMBER,
--     correct NUMBER,
--     incorrect NUMBER,
--     missed NUMBER
-- );