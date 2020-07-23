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
    numCards INT NOT NULL,
    content TEXT
    );

CREATE TABLE magiccard(
    id SERIAL PRIMARY KEY,
    combo_id INT REFERENCES combo(id),
    image_uris TEXT NOT NULL
    );

--INSERT INTO username (id, user_name, pass_word) VALUES (1, 'FuriousAvatar', '1234password');
INSERT INTO username (user_name) VALUES ('FuriousAvatar');

Insert INTO combo (user_name_id, numCards, content) VALUES (1, 3, 'Use Thassa''s abiltiy to exile Cavalier of Gales, bring it back, and add 3 counters to Ominous Seas.');

Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/c/e/ce8965f2-756a-4461-a643-db024a11c2de.png?1591226420');
Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/normal/front/2/7/27b52628-de05-4ec1-9978-e998cf17bb26.jpg?1581481373');
Insert INTO magiccard (combo_id, image_uris) VALUES (1, 'https://img.scryfall.com/cards/png/front/a/5/a5356b11-e505-4838-aecb-327689eeead1.png?1592516326');

Insert INTO combo (user_name_id, numCards, content) VALUES (1, 3, 'Play Risen Reef to put lands in play and cards in your hand when you play an Elemental, then drop a Nyxbloom Ancient to produce three times more mana, then use Electrodominance to finish off your opponent.');

Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/8/2/82389aaa-9f32-4169-a71c-1aea5af9e935.png?1592517569');
Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/a/3/a391da36-0b40-46ea-b771-50d2b920207e.png?1581480808');
Insert INTO magiccard (combo_id, image_uris) VALUES (2, 'https://img.scryfall.com/cards/png/front/5/c/5c63877b-cdab-4ce4-a1c0-c088eb62a57a.png?1584830858');

Insert INTO combo (user_name_id, numCards, content) VALUES (1, 3, 'Cavalcade of Calamity deals an extra damage when a creature with 1 power attacks, Torbran''s ability increases this damage by two and if three 1/1 creatures attack, it could cause up to 18 damage.');

Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/8/a/8a81e889-490b-4aeb-8e84-ea9a390bb8fe.png?1584830817');
Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/7/9/79f591cd-d277-4ba5-b1bf-1c09cac9cb8a.png?1572490491');
Insert INTO magiccard (combo_id, image_uris) VALUES (3, 'https://img.scryfall.com/cards/png/front/d/c/dccbe031-1547-4fa5-ba9a-caa1b1f5eb5d.png?1592517091');

INSERT INTO username (user_name) VALUES ('Izzig');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Terror deals damage when another creature comes into play on your side. Play Weaver and deal the one damage to it, then drop the instant so the spider doesn''t die and you get infinite 1/1 tokens and life.');

Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/4/3/432ecd5f-966f-4403-a973-51e175a524a0.png?1594736810');
Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/e/6/e6ab63c8-0adc-4d74-aee5-a58ce5c0dad8.png?1594737258');
Insert INTO magiccard (combo_id, image_uris) VALUES (4, 'https://img.scryfall.com/cards/png/front/4/3/43c037e3-7d1a-48ca-8ecc-276696592f62.png?1594737038');

Insert INTO combo (user_name_id, numCards, content) VALUES (1, 3, 'Play Metamorphose after your opponent is no longer able to change the top card of their deck, just before your turn, memorize the name of the card that is now on top of their library, play the Booby Trap, copy it, name the card and if your opponent has 20 or less life, you win!');

Insert INTO magiccard (combo_id, image_uris) VALUES (5, 'https://img.scryfall.com/cards/png/front/a/0/a0f0c20c-184e-4d27-ae8b-933abb6fee0c.png?1562533013'), (5, 'https://img.scryfall.com/cards/png/front/1/a/1af0c9a0-0dfa-4245-8b29-7bd37982b7d2.png?1562732088'), (5, 'https://img.scryfall.com/cards/png/front/c/d/cd360a6c-6685-462b-8aee-b869c1e4aa89.png?1562943420');

Insert INTO combo (user_name_id, numCards, content) VALUES (1, 3, 'In case your opponent has no islands, play Sea''s Claim on one of their lands. Every turn you''ll be able to steal a creature with Seasinger, sacrifice it and steal another with Helm of Possession.');

Insert INTO magiccard (combo_id, image_uris) VALUES (6, 'https://img.scryfall.com/cards/png/front/8/2/82e836c8-4371-402f-8f90-81325a9879b8.png?1562737796'), (6, 'https://img.scryfall.com/cards/png/front/8/5/851545d3-cc23-40da-84c5-93da0dd14a8d.png?1562592300'), (6, 'https://img.scryfall.com/cards/png/front/7/9/79e16191-8dca-491b-b892-17696023d581.png?1562054950');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Have either Underworld Dreams or Ob Nixilis on the battlefield then cast Peer into the Abyss targeting your opponent. They will draw roughly 20-25 cards and each draw will deal one damage.');

Insert INTO magiccard (combo_id, image_uris) VALUES (7, 'https://img.scryfall.com/cards/png/front/0/3/03919c86-1c4a-43b0-a2db-54ca6ae1ac57.png?1581480025'), (7, 'https://img.scryfall.com/cards/png/front/1/4/14916e2d-73af-4747-a927-d2d4cb3e32db.png?1557576527'), (7, 'https://img.scryfall.com/cards/png/front/a/a/aac00055-640e-4749-8d23-d242e6d0b23a.png?1594736330');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Have all three in play with any other creature out too. Sacrifice the creature and kill with alter. Also trigger a 2/2 zombie from rotlung. Repeat the process as many times as needed for the win');

Insert INTO magiccard (combo_id, image_uris) VALUES (8, 'https://img.scryfall.com/cards/png/front/8/7/87b29d1e-9c06-4ad1-8178-b3eaa212f6f1.png?1562927028'), (8, 'https://img.scryfall.com/cards/png/front/8/b/8bbdb402-0e22-4f83-987a-9d0268a82f10.png?1562779616'), (8, 'https://img.scryfall.com/cards/png/front/1/6/169356e0-46dc-4096-8e66-36726454f104.png?1562202433');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Have out insight and ominous seas and play explosion the higher the amount of mana the better but even if you make x 4 you will get to deal 4, draw 8, and put an 8/8 into play');

Insert INTO magiccard (combo_id, image_uris) VALUES (9, 'https://img.scryfall.com/cards/png/front/c/3/c38d1722-96b0-4756-9da9-fe18b1c80649.png?1594735819'), (9, 'https://img.scryfall.com/cards/png/front/c/e/ce8965f2-756a-4461-a643-db024a11c2de.png?1591226420'), (9, 'https://img.scryfall.com/cards/png/front/e/0/e0644c92-4d67-475e-8c8e-0e2c493682fb.png?1572893978');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Have all three out having chosen "goblin" for the creature type for arcane adaptation. Use Captivating Crew to take an opponent''s creature. Attack with it and then sacrifice it to airdrop condor. Repeat every turn.');

Insert INTO magiccard (combo_id, image_uris) VALUES (10, 'https://img.scryfall.com/cards/png/front/4/f/4f0ba1fb-30b1-413e-9b7c-790055e2d911.png?1591320543'), (10, 'https://img.scryfall.com/cards/png/front/e/c/ec9796ac-11e2-4295-bf00-f684d0111970.png?1562951282'), (10, 'https://img.scryfall.com/cards/png/front/b/f/bf3edaaf-cf63-4e17-94ae-9d9991d9fb5f.png?1562563280');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Enchant the crab with both and for each one blue you pay: steal a creature.');

Insert INTO magiccard (combo_id, image_uris) VALUES (11, 'https://img.scryfall.com/cards/png/front/6/3/63565b03-28e9-4534-b085-d5803e2623bb.png?1562380893'), (11, 'https://img.scryfall.com/cards/png/front/8/f/8f46cb4e-1bdf-4322-8df1-58a8887fb963.png?1562438492'), (11, 'https://img.scryfall.com/cards/png/front/8/3/8321888a-a450-4c15-9461-255cfaa05367.png?1562922645');

Insert INTO combo (user_name_id, numCards, content) VALUES (2, 3, 'Turn two play the infiltrator. Turn three play spellbinder imprinting savage beating onto it. Turn four equip spellbinder onto the infiltrator and attack. The unlocked damage triggers spellbinder''s ability casting savage beating choose the extra attack step unwrapping your creature and then attack again. Repeat until your opponent is disposed of.');

Insert INTO magiccard (combo_id, image_uris) VALUES (12, 'https://img.scryfall.com/cards/png/front/1/7/1761d867-2eb0-406b-b175-97a90c457844.png?1562701439'), (12, 'https://img.scryfall.com/cards/png/front/4/d/4d193d4f-1beb-4938-b3fb-b2e96d0c9ec4.png?1562636758'), (12, 'https://img.scryfall.com/cards/png/front/c/3/c3739d37-7865-46bf-abbc-7a5678709508.png?1562639405');




Insert INTO combo (user_name_id,  numCards, content) VALUES (2, 2, 'Have vito out. Then play revenge. if you have been gaining life most of the game you would easily have around 20 life and your opponent should be less than 40. Revenge will make you gain around 20 life and your opponents life cut in half before they lose around twenty from vito.');

Insert INTO magiccard (combo_id, image_uris) VALUES (13, 'https://img.scryfall.com/cards/png/front/0/f/0fe79ee4-c3f3-4a6b-a967-203ca3b70ee5.png?1594736442'), (13, 'https://img.scryfall.com/cards/png/front/5/0/50ae0831-f3ba-4535-bfb6-feefbbc15275.png?1584832069');