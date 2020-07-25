SELECT * FROM username;

SELECT * FROM combo;

SELECT * FROM magiccard;
--show everything from username and combo table
SELECT * FROM username u JOIN combo c ON u.id=c.user_name_id;
--show everything from magicCard and combo table
SELECT * FROM combo c JOIN magiccard m ON c.id=m.combo_id;
--show everything from all tables
SELECT * FROM combo c JOIN magiccard m ON c.id=m.combo_id JOIN username u ON u.id=c.user_name_id;

DELETE FROM magiccard WHERE combo_id=18;
DELETE FROM combo WHERE id=18;
DELETE FROM username WHERE user_name='jack';
