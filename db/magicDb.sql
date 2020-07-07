DROP TABLE IF EXISTS magicCard;
DROP TABLE IF EXISTS combo;
DROP TABLE IF EXISTS username;

CREATE TABLE username(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(256) NOT NULL UNIQUE,
    pass_word VARCHAR(256) NOT NULL
    );

CREATE TABLE combo(
    id SERIAL PRIMARY KEY,
    user_name_id INT NOT NULL REFERENCES username(id),
    content TEXT
    );

CREATE TABLE magicCard(
    id SERIAL PRIMARY KEY,
    combo_id INT NOT NULL REFERENCES combo(id),
    image_uris TEXT NOT NULL
    );

INSERT INTO username (user_name, pass_word) VALUES ('FuriousAvatar', '1234password');

Insert INTO combo (user_name_id, content) VALUES (1, 'Use Thassa''s abiltiy to exile Cavalier of Gales (hover mouse over image), bring it back, and add 3 counters to Ominous Seas.');

Insert INTO magicCard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/c/e/ce8965f2-756a-4461-a643-db024a11c2de.png?1591226420');
Insert INTO magicCard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/c/8/c83ed3e0-82d0-4410-a6ca-b0f923eadf83.png?1581479572');
Insert INTO magicCard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/a/5/a5356b11-e505-4838-aecb-327689eeead1.png?1592516326');