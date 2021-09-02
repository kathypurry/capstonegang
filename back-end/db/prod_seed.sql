\c production_database_name;




INSERT INTO users (
    username, email, password
) VALUES
('KATHYISCOOL', 'Kathy@pursuit.org', 'issapassword'),
('CANDYISCOOL', 'CANDY@pursuit.org', 'issapassowrdlol233456');

INSERT INTO code_snippets (
    difficulty, snippet
) VALUES
(5, '[1,2,3,4,5,6]'),
(6, '[1,2,3,4,5,6]');

INSERT INTO game_stats (
    wpm, correct, incorrect, missed
) VALUES
(40, 30, 20, 10),
(10, 20, 30, 40);
