const express = require('express');
const path = require('path');
const {Pool} = require('pg');
const axios = require('axios');

const CombosController = require('./public/javascript/magicDb.js');
const PORT = process.env.PORT || 8888;
const connectionString = process.env.DATABASE_URL || 'postgres://puzwgqmubratkb:ec448406403a5f0f3149cbbd7ecc69fc642b6abb465098324ee82c1e086f9081@ec2-54-236-169-55.compute-1.amazonaws.com:5432/daot60aij3ip2a?ssl=true';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//const pool = new Pool({connectionString: connectionString});

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/getMagic', function(req, res) {
    res.render('pages/magic');
});
app.get('/getCard', function(req, res) {
    var cardSearch = req.query.cardSearch;
    axios.get('https://api.scryfall.com/cards/named?fuzzy=' + cardSearch)
    //axios.get('https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1')
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        //res.status(200).json(response.data.image_uris.png);
        res.status(200).json(response.data);
        //res.render('pages/magic');
      })
      .catch(error => {
        console.log(error);
      });
      //res.render('pages/magic');
});
app.get('/searchCard', function(req, res) {
  var cardQuery = req.query.cardQuery;
  axios.get('https://api.scryfall.com/cards/search?q=' + cardQuery)
  .then(response => {
      console.log(response.data.url);
      console.log(response.data.explanation);
      res.status(200).json(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});
app.get('/getCombos', CombosController.getCombos);
app.get('/submitUsername', CombosController.submitUsername);
app.get('/submitCombo', CombosController.submitCombo);
app.get('/submitCards', CombosController.submitCards);
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

