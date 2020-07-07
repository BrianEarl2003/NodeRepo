SELECT * FROM username;

SELECT * FROM combo;

SELECT * FROM magicCard;
--show everything from username and combo table
SELECT * FROM username u JOIN combo c ON u.id=c.user_name_id;
--show everything from magicCard and combo table
SELECT * FROM combo c JOIN magicCard m ON c.id=m.combo_id;

