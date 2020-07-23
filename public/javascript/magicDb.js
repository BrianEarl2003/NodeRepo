const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://puzwgqmubratkb:ec448406403a5f0f3149cbbd7ecc69fc642b6abb465098324ee82c1e086f9081@ec2-54-236-169-55.compute-1.amazonaws.com:5432/daot60aij3ip2a?ssl=true';
const pool = new Pool({ connectionString: connectionString });

function getCombos(request, response) {
  console.log("running");
  const id = request.query.id;
  getCombosQuery(id, function (error, result) {
    if (error || result == null) {
      response.status(500).json({ success: false, data: error });
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
    }
  });
} //END get_combos

function getCombosQuery(id, callback) {
  console.log("Getting all combos from DB");
  const sql = "SELECT * FROM combo c JOIN magicCard m ON c.id=m.combo_id JOIN username u ON u.id=c.user_name_id WHERE u.id=$1::int;";
  params = [id];
  pool.query(sql, params, function (err, result) {
    if (err) {
      console.log("Error in query: " + err);
      callback(err, null);
    }
    console.log("Found result: " + JSON.stringify(result.rows));
    callback(null, result.rows);
  });
}

function submitUsername(request, response) {
  console.log("running submitUsername");
  const user_name = request.query.user_name;
  submitUsernameQuery(user_name, function (error, result) {
    if (error) {
      response.status(500).json({ success: false, data: error });
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
    }
  });
} //END get_combos

function submitUsernameQuery(user_name, callback) {
  console.log("submitting username to DB " + user_name);
  const sql1 = `SELECT user_name FROM username WHERE user_name = '${user_name}'`;
  pool.query(sql1, function (err, result) {
    console.log(result);
    if (result.rowCount > 0) {
    } else {
      const sql2 = "Insert INTO username (user_name) VALUES ($1::text);";
      params = [user_name];
      pool.query(sql2, params, function (err, result) {
        if (err) {
          console.log("Error in query: " + err);
          callback(err, null);
        }
        console.log("Found result: " + JSON.stringify(result));
        callback(null, result);
      });
    }
  });
}

function submitCombo(request, response) {
  console.log("running submitCombo");
  const numCards = request.query.numCards;
  const content = request.query.content;
  const user_name = request.query.user_name;
  console.log('before submit combo ' + user_name);
  submitComboQuery(user_name, numCards, content, function (error, result) {
    if (error) {
      response.status(500).json({ success: false, data: error });
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
    }
  });
} //END get_combos

function submitComboQuery(user_name, numCards, content, callback) {
  console.log("Submitting combo to DB" + user_name);
  const sql = "Insert INTO combo (user_name_id, numCards, content) VALUES ((SELECT id FROM username WHERE user_name = $1::text), $2::int, $3::text);";
  //const sql = "Insert INTO combo (user_name_id, content) VALUES ($1::int, $2::text);";
  params = [user_name, numCards, content];
  pool.query(sql, params, function (err, result) {
    if (err) {
      console.log("Error in query: " + err);
      callback(err, null);
    }
    console.log("Found result: " + JSON.stringify(result));
    callback(null, result);
  });
}

function submitCards(request, response) {
  console.log("running submitCards");
  const numCards = request.query.numCards;
  const user_name = request.query.user_name;
  const image_uris1 = request.query.image_uris1;
  const image_uris2 = request.query.image_uris2;
  const image_uris3 = request.query.image_uris3;
  const image_uris4 = request.query.image_uris4;
  const image_uris5 = request.query.image_uris5;
  submitCardsQuery(numCards, user_name, image_uris1, image_uris2, image_uris3, image_uris4, image_uris5, function (error, result) {
    if (error) {
      response.status(500).json({ success: false, data: error });
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
    }
  });
} //END get_combos

function submitCardsQuery(numCards, user_name, image_uris1, image_uris2, image_uris3, image_uris4, image_uris5, callback) {
  console.log("submitting all cards to DB " + user_name);
  console.log(numCards);
  //image_uris = {image_uris1, image_uris2, image_uris3, image_uris4, image_uris5};
  var sql = "";
  /*sql += "Insert INTO magiccard (combo_id, image_uris) VALUES ";
  for (var i = 2; i < numCards + 2; i++) {
    //sql += `(SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $3::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $4::text);`;
    sql += `((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), '${image_uris[i]}')`;
    if (i < numCards + 1) {
      sql += ",";
    }
    if (i == numCards + 1) {
      sql += ";";
    }
  }
  params = [user_name];*/
  if (numCards == 1) {
    sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text);"
    params = [user_name, image_uris1];
  }
  if (numCards == 2) {
    sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $3::text);"
    params = [user_name, image_uris1, image_uris2];
  }
  if (numCards == 3) {
    sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $3::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $4::text);"
    params = [user_name, image_uris1, image_uris2, image_uris3];
  }
  if (numCards == 4) {
    sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $3::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $4::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $5::text);"
    params = [user_name, image_uris1, image_uris2, image_uris3, image_uris4];
  }
  if (numCards == 5) {
    sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $2::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $3::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $4::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $5::text), ((SELECT c.id FROM combo c JOIN username u ON c.user_name_id=u.id WHERE user_name = $1::text order by c.id desc limit 1), $6::text);"
    params = [user_name, image_uris1, image_uris2, image_uris3, image_uris4, image_uris5];
  }
  pool.query(sql, params, function (err, result) {
    if (err) {
      console.log("Error in query: " + err);
      callback(err, null);
    }
    console.log("Found result: " + JSON.stringify(result));
    callback(null, result);
  });
}

module.exports = {
  getCombos: getCombos,
  getCombosQuery: getCombosQuery,
  submitUsername: submitUsername,
  submitUsernameQuery: submitUsernameQuery,
  submitCombo: submitCombo,
  submitComboQuery: submitComboQuery,
  submitCards: submitCards,
  submitCardsQuery: submitCardsQuery
};