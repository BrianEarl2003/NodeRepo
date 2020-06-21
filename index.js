const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
/*app.get('/calculator', function(req, res) {
  res.render('pages/form', params);
});*/

app.get('/getRate', function(req, res) {
  var weight = req.query.weight;
  var mailType = req.query.mailType;
  
  postage = calculateRate(weight, mailType);
  
  
  var params = {weight: weight, mailType: mailType, postage: postage};
  res.render('pages/response', params);
});
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

function calculateRate(weight, mailType) {
  var postage = 0;
  if (mailType == 'stamped_letter'){
    if (weight <= 1){
      postage = .55;
    }
    if (weight <= 2 && weight > 1){
      postage = .70;
    }
    if (weight <= 3 && weight > 2){
      postage = .85;
    }
    if (weight <= 3.5 && weight > 3){
      postage = 1.00;
    }
  }
  if (mailType == 'metered_letter'){
    if (weight <= 1){
      postage = .50;
    }
    if (weight <= 2 && weight > 1){
      postage = .65;
    }
    if (weight <= 3 && weight > 2){
      postage = .80;
    }
    if (weight <= 3.5 && weight > 3){
      postage = .95;
    }
  }
  if (mailType == 'large_envelope'){
    if (weight <= 1){
      postage = 1.00;
    }
    if (weight <= 2 && weight > 1){
      postage = 1.20;
    }
    if (weight <= 3 && weight > 2){
      postage = 1.40;
    }
    if (weight <= 4 && weight > 3){
      postage = 1.60;
    }
    if (weight <= 5 && weight > 4){
      postage = 1.80;
    }
    if (weight <= 6 && weight > 5){
      postage = 2.00;
    }
    if (weight <= 7 && weight > 6){
      postage = 2.20;
    }
    if (weight <= 8 && weight > 7){
      postage = 2.40;
    }
    if (weight <= 9 && weight > 8){
      postage = 2.60;
    }
    if (weight <= 10 && weight > 9){
      postage = 2.80;
    }
    if (weight <= 11 && weight > 10){
      postage = 3.00;
    }
    if (weight <= 12 && weight > 11){
      postage = 3.20;
    }
    if (weight <= 13 && weight > 12){
      postage = 3.40;
    }
  }
  if (mailType == 'first_class_package'){
    if (weight <= 4){
      postage = 3.80;
    }
    if (weight <= 8 && weight > 4){
      postage = 4.60;
    }
    if (weight <= 12 && weight > 8){
      postage = 5.30;
    }
    if (weight <= 13 && weight > 12){
      postage = 5.90;
    }
  }
  return postage;
}