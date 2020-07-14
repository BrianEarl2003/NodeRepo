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
  //const id = request.query.id;
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
      //submitCombo();
    }
  });
} //END get_combos

function submitUsernameQuery(user_name, callback) {
  console.log("submitting username to DB" + user_name);
  const sql1 = `SELECT user_name FROM username WHERE user_name = '${user_name}'`;
  pool.query(sql1, function (err, result) {
    if (result == user_name) {
      callback(null, result);
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
  //const id = request.query.id;
  const content = request.query.content;
  const user_name = request.query.user_name;
  submitComboQuery(content, user_name, function (error, result) {
    if (error) {
      response.status(500).json({ success: false, data: error });
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
      //submitCards();
    }
  });
} //END get_combos

function submitComboQuery(content, user_name, callback) {
  console.log("Submitting combo to DB" + user_name);
  const sql = "Insert INTO combo (user_name_id, content) VALUES ((SELECT id FROM username WHERE user_name = $1::text), $2::text);";
  params = [content, user_name];
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
  //const id = request.query.id;
  const combo_id = request.query.combo_id;
  const user_name = request.query.user_name;
  const image_uris = request.query.image_uris;
  submitCardsQuery(combo_id, user_name, image_uris, function (error, result) {
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

function submitCardsQuery(combo_id, user_name, image_uris, callback) {
  console.log("submitting all cards to DB" + user_name + combo_id);
  const sql = "Insert INTO magiccard (combo_id, image_uris) VALUES ((SELECT id FROM combo WHERE user_name = $1::text order by id limit 1), $2::text), ((SELECT id FROM combo WHERE user_name = $1::text order by id limit 1), $3::text), ((SELECT id FROM combo WHERE user_name = $1::text order by id limit 1), $4::text);";
  params = [combo_id, user_name, image_uris];
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