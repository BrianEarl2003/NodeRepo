DROP TABLE IF EXISTS magiccard;
DROP TABLE IF EXISTS combo;
DROP TABLE IF EXISTS username;

CREATE TABLE username(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(256) NOT NULL UNIQUE--,
    --pass_word VARCHAR(256) NOT NULL
    );

CREATE TABLE combo(
    id SERIAL PRIMARY KEY,
    user_name_id INT NOT NULL REFERENCES username(id),
    content TEXT
    );

CREATE TABLE magiccard(
    id SERIAL PRIMARY KEY,
    combo_id INT NOT NULL REFERENCES combo(id),
    image_uris TEXT NOT NULL
    );

--INSERT INTO username (id, user_name, pass_word) VALUES (1, 'FuriousAvatar', '1234password');
INSERT INTO username (id, user_name) VALUES (1, 'FuriousAvatar');

Insert INTO combo (id, user_name_id, content) VALUES (1, 1, 'Use Thassa''s abiltiy to exile Cavalier of Gales, bring it back, and add 3 counters to Ominous Seas.');

Insert INTO magiccard (id, combo_id, image_uris) VALUES (1, 1, 'https://img.scryfall.com/cards/png/front/c/e/ce8965f2-756a-4461-a643-db024a11c2de.png?1591226420');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (2, 1, 'https://img.scryfall.com/cards/normal/front/2/7/27b52628-de05-4ec1-9978-e998cf17bb26.jpg?1581481373');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (3, 1, 'https://img.scryfall.com/cards/png/front/a/5/a5356b11-e505-4838-aecb-327689eeead1.png?1592516326');

Insert INTO combo (id, user_name_id, content) VALUES (2, 1, 'Play Risen Reef to put lands in play and cards in your hand when you play an Elemental, then drop a Nyxbloom Ancient to produce three times more mana, then use Electrodominance to finish off your opponent.');

Insert INTO magiccard (id, combo_id, image_uris) VALUES (4, 2, 'https://img.scryfall.com/cards/png/front/8/2/82389aaa-9f32-4169-a71c-1aea5af9e935.png?1592517569');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (5, 2, 'https://img.scryfall.com/cards/png/front/a/3/a391da36-0b40-46ea-b771-50d2b920207e.png?1581480808');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (6, 2, 'https://img.scryfall.com/cards/png/front/5/c/5c63877b-cdab-4ce4-a1c0-c088eb62a57a.png?1584830858');

Insert INTO combo (id, user_name_id, content) VALUES (3, 1, 'Cavalcade of Calamity deals an extra damage when a creature with 1 power attacks, Torbran''s ability increases this damage by two and if three 1/1 creatures attack, it could cause up to 18 damage.');

Insert INTO magiccard (id, combo_id, image_uris) VALUES (7, 3, 'https://img.scryfall.com/cards/png/front/8/a/8a81e889-490b-4aeb-8e84-ea9a390bb8fe.png?1584830817');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (8, 3, 'https://img.scryfall.com/cards/png/front/7/9/79f591cd-d277-4ba5-b1bf-1c09cac9cb8a.png?1572490491');
Insert INTO magiccard (id, combo_id, image_uris) VALUES (9, 3, 'https://img.scryfall.com/cards/png/front/d/c/dccbe031-1547-4fa5-ba9a-caa1b1f5eb5d.png?1592517091');