DROP DATABASE IF EXISTS dbdovavbhl8c03;
CREATE DATABASE dbdovavbhl8c03;

\c dbdovavbhl8c03;

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