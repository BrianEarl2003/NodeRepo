const {Pool} = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://puzwgqmubratkb:ec448406403a5f0f3149cbbd7ecc69fc642b6abb465098324ee82c1e086f9081@ec2-54-236-169-55.compute-1.amazonaws.com:5432/daot60aij3ip2a?ssl=true';
const pool = new Pool({connectionString: connectionString});

function getCombos(request,response){
    console.log("running");
    const id = request.query.id;
    getCombosQuery(id, function(error,result){
      if (error || result == null){
        response.status(500).json({success:false, data:error});
        console.log("Error")
      } else {
        const combos = result;
        console.log(combos);
        params = result; //chance to remove [0]
        response.status(200).json(combos);
      }
    });
} //END get_combos

function getCombosQuery(id, callback){
    console.log("Getting all combos from DB");
    const sql = "SELECT * FROM combo c JOIN magicCard m ON c.id=m.combo_id JOIN username u ON u.id=c.user_name_id WHERE u.id=$1::int;";
    params = [id];
    pool.query(sql, params, function(err, result){
        if (err){
            console.log("Error in query: " + err);
            callback(err, null);
        }
    console.log("Found result: " + JSON.stringify(result.rows));
    callback(null, result.rows);    
    });
}

function submitUsername(request,response){
  console.log("running");
  const id = request.query.id;
  submitUsernameQuery(id, function(error,result){
    if (error){
      response.status(500).json({success:false, data:error});
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
      submitComboForm();
    }
  });
} //END get_combos

function submitUsernameQuery(id, callback){
  console.log("Getting all combos from DB");
  const sql = "Insert INTO username (id, user_name) VALUES ($1::int, $2::text);";
  params = [id, user_name];
  pool.query(sql, function(err, result){
      if (err){
          console.log("Error in query: " + err);
          callback(err, null);
      }
  console.log("Found result: " + JSON.stringify(result.rows));
  callback(null, result.rows);    
  });
}

function submitCombo(request,response){
  console.log("running");
  const id = request.query.id;
  submitComboQuery(id, function(error,result){
    if (error){
      response.status(500).json({success:false, data:error});
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
      submitCardsForm();
    }
  });
} //END get_combos

function submitComboQuery(id, callback){
  console.log("Getting all combos from DB");
  const sql = "Insert INTO combo (id, user_name_id, content) VALUES ($1::int, $2::int, $3::text);";
  params = [id, user_name_id, content];
  pool.query(sql, function(err, result){
      if (err){
          console.log("Error in query: " + err);
          callback(err, null);
      }
  console.log("Found result: " + JSON.stringify(result.rows));
  callback(null, result.rows);    
  });
}

function submitCards(request,response){
  console.log("running");
  const id = request.query.id;
  submitCardsQuery(id, function(error,result){
    if (error){
      response.status(500).json({success:false, data:error});
      console.log("Error")
    } else {
      const combos = result;
      console.log(combos);
      params = result; //chance to remove [0]
      response.status(200).json(combos);
    }
  });
} //END get_combos

function submitCardsQuery(id, callback){
  console.log("Getting all combos from DB");
  const sql = "Insert INTO magiccard (id, combo_id, image_uris) VALUES ($1::int, $2::int, $3::text), ($4::int, $5::int, $6::text), ($7::int, $8::int, $9::text);";
  params = [id, combo_id, image_uris];
  pool.query(sql, function(err, result){
      if (err){
          console.log("Error in query: " + err);
          callback(err, null);
      }
  console.log("Found result: " + JSON.stringify(result.rows));
  callback(null, result.rows);    
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