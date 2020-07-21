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
    user_name_id INT REFERENCES username(id),
    content TEXT
    );

CREATE TABLE magiccard(
    id SERIAL PRIMARY KEY,
    combo_id INT REFERENCES combo(id),
    image_uris TEXT NOT NULL
    );

--INSERT INTO username (id, user_name, pass_word) VALUES (1, 'FuriousAvatar', '1234password');
INSERT INTO username (user_name) VALUES ('FuriousAvatar');

Insert INTO combo (user_name_id, content) VALUES (1, 'Use Thassa''s abiltiy to exile Cavalier of Gales, bring it back, and add 3 counters to Ominous Seas.');

Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/c/e/ce8965f2-756a-4461-a643-db024a11c2de.png?1591226420');
Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/normal/front/2/7/27b52628-de05-4ec1-9978-e998cf17bb26.jpg?1581481373');
Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/a/5/a5356b11-e505-4838-aecb-327689eeead1.png?1592516326');

Insert INTO combo (user_name_id, content) VALUES (1, 'Play Risen Reef to put lands in play and cards in your hand when you play an Elemental, then drop a Nyxbloom Ancient to produce three times more mana, then use Electrodominance to finish off your opponent.');

Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/8/2/82389aaa-9f32-4169-a71c-1aea5af9e935.png?1592517569');
Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/a/3/a391da36-0b40-46ea-b771-50d2b920207e.png?1581480808');
Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/5/c/5c63877b-cdab-4ce4-a1c0-c088eb62a57a.png?1584830858');

Insert INTO combo (user_name_id, content) VALUES (1, 'Cavalcade of Calamity deals an extra damage when a creature with 1 power attacks, Torbran''s ability increases this damage by two and if three 1/1 creatures attack, it could cause up to 18 damage.');

Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/8/a/8a81e889-490b-4aeb-8e84-ea9a390bb8fe.png?1584830817');
Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/7/9/79f591cd-d277-4ba5-b1bf-1c09cac9cb8a.png?1572490491');
Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/d/c/dccbe031-1547-4fa5-ba9a-caa1b1f5eb5d.png?1592517091');

INSERT INTO username (user_name) VALUES ('Izzig');

Insert INTO combo (user_name_id, content) VALUES (2, 'Terror deals damage when another creature comes into play on your side. Play Weaver and deal the one damage to it, then drop the instant so the spider doesn''t die and you get infinite 1/1 tokens and life.');

Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/4/3/432ecd5f-966f-4403-a973-51e175a524a0.png?1594736810');
Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/e/6/e6ab63c8-0adc-4d74-aee5-a58ce5c0dad8.png?1594737258');
Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/4/3/43c037e3-7d1a-48ca-8ecc-276696592f62.png?1594737038');

Insert INTO combo (user_name_id, content) VALUES (1, 'Play Metamorphose after your opponent is no longer able to change the top card of their deck, just before your turn, memorize the name of the card that is now on top of their library, play the Booby Trap, copy it, name the card and if your opponent has 20 or less life, you win!');

Insert INTO magiccard (combo_id, image_uris) VALUES (5, 'https://img.scryfall.com/cards/png/front/a/0/a0f0c20c-184e-4d27-ae8b-933abb6fee0c.png?1562533013'), (5, 'https://img.scryfall.com/cards/png/front/1/a/1af0c9a0-0dfa-4245-8b29-7bd37982b7d2.png?1562732088'), (5, 'https://img.scryfall.com/cards/png/front/c/d/cd360a6c-6685-462b-8aee-b869c1e4aa89.png?1562943420');

Insert INTO combo (user_name_id, content) VALUES (1, 'In case your opponent has no islands, play Sea''s Claim on one of their lands. Every turn you''ll be able to steal a creature with Seasinger, sacrifice it and steal another with Helm of Possession.');

Insert INTO magiccard (combo_id, image_uris) VALUES (6, 'https://img.scryfall.com/cards/png/front/8/2/82e836c8-4371-402f-8f90-81325a9879b8.png?1562737796'), (6, 'https://img.scryfall.com/cards/png/front/8/5/851545d3-cc23-40da-84c5-93da0dd14a8d.png?1562592300'), (6, 'https://img.scryfall.com/cards/png/front/7/9/79e16191-8dca-491b-b892-17696023d581.png?1562054950');

