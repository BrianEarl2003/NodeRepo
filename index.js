const express = require('express')
const path = require('path')
const axios = require('axios');
const PORT = process.env.PORT || 8888
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
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

