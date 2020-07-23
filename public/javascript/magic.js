function grab_card() {
  console.log('Grab Card');
  event.preventDefault();
  //name = name.replace(' ', '-');
  //console.log(name);
  var data2 = $('#cardSearchForm').serialize();
  var data3 = "";
  //if (data2 == "") {
    //data3 = name;
  //} else {
    data3 = data2.replace(' ', '-');
  //}
  console.log(data3);
  $.ajax({
    url: '/getCard',
    type: 'GET',
    data: data3,
    dataType: 'json', //will parse json into javascript object
    //callback called when suceed
    success: (data) => {
      console.log('ajax success!', data);
      /*newhtml1 = "";      //Show json on page
      newhtml1 += "<p>" +  JSON.stringify(data)  + "</p>";
      $('#json').html(newhtml1);*/
      newhtml = "";
      imageURL = "";
      if (data.layout == "transform") {
        for (var i = 0; i < 2; i++)
        {
          newhtml += "<input onclick='addImgUrl(" + "\"" + data.card_faces[i].image_uris.png + "\"" + ")' type='image' class='card' src='" + data.card_faces[i].image_uris.png + "' alt='Card' />";
        }
      } else { 
        imageUrl = data.image_uris.png;
        newhtml += "<input onclick='addImgUrl(" + "\"" + imageUrl + "\"" + ")' type='image' class='card' src='" + imageUrl + "' alt='Card' />";
      }
      $('#picture2').append(newhtml);
    }//sucess data call
  });//ajax function call
}

function addImgUrl(url) {
  event.preventDefault();
  /*var data2 = $('form').serialize();
  $.ajax({
    url: '/getCard',
    type: 'GET',
    data: data2,
    dataType: 'json', //will parse json into javascript object
    //callback called when succeed
    success: (data) => {*/
      var i = 0;
      var max = 0;
      var i = parseInt($('#cardId').val());
      var max = (i + 1);
      var newhtml = "";
      for (i; i < max; i++) {
        //$('#card'+i).val(data.image_uris.png);
        $('#card'+i).val(url);
        newhtml = "Card" + i + "<input onclick='removeCard(" + "\"" + i + "\"" + ")' type='image' src='" + url + "' alt='Card' />";
        $('#img'+i).html(newhtml);
      }
      if (i == 6) {
        i = 1;
      }
      $('#cardId').val(i);
    //}
  //});
}

function removeCard(i) {
  newhtml = "";
  $('#img'+i).html(newhtml);
  $('#card'+i).val(newhtml);
}

function grab_list() {
  console.log('Grab List');
  event.preventDefault();
  var data2 = $('#searchQueryForm').serialize();
  //var data3 = data2.serialize().replace("'", "|");
  $.ajax({
    url: '/searchCard',
    type: 'GET',
    data: data2,
    dataType: 'json', //will parse json into javascript object
    //callback called when suceed
    success: (data) => {
      console.log('ajax success!', data);
      console.log(data.data.length);
      newhtml2 = "";
      var page = 0;
      var max = 0;
      var i = 0;
      page = parseInt($('#pageNum').val());
      
      i = (page) * 25;
      if (data.data.length - i < 25 ) {
        max = data.data.length;
      } else {
        max = (page + 1) * 25;
      }
      for (i; i < max; i++) {
        //var data2 = $('form').serialize();
        var cardName = "";
        cardName = data.data[i].name.replace("'", "");
        //cardName = cardName.replace("//", "");
        //cardName = cardName.replace(",", "");
        //cardName = cardName.replace(",", "");
        newhtml2 += "<input type=\"button\" onclick='fillName(" + "\"" + cardName + "\"" + ")' value=\"" + cardName + "\"id=\"" + cardName + "\"/><br>";
      }
      i = i/25;
      var group = 0;
      group = parseInt($('#groupNum').val());
      var cardQuery = $('#cardQuery').val();
      if (page % 7 == 0 && page > 6) {
        i = 0;
        var tempGroup = group;
        group++;
        
        var pageGroup = cardQuery.replace('&page=' + tempGroup, '&page=' + group);
        $('#cardQuery').val(pageGroup);
      }
      if (group == 1 && page == 6) {
        $('#cardQuery').val(cardQuery + '&page=' + group);
      }
      $('#groupNum').val(Math.ceil(group));
      $('#pageNum').val(Math.ceil(i));
      $('#cardList').html(newhtml2);
      /*newhtml1 = "";      //Show json on page
      newhtml1 += "<p>" +  JSON.stringify(data)  + "</p>";
      $('#json').html(newhtml1);*/
    }
  });
}

function fillName(name) {
  event.preventDefault();
  console.log(name);
  /*var data2 = name;
  var data3 = data2.replace(' ', '-');
  $.ajax({
    url: '/getCard',
    type: 'GET',
    data: data3,
    dataType: 'json', //will parse json into javascript object
    //callback called when succeed
    success: (data) => {
      //image = data.image_uris.png;
      //newhtml3 = "";
      //newhtml3 += "<input type='image' class='card' src='" + name + "' alt='Card' />";
      newhtml = "";
      imageURL = "";
      if (data.layout == "transform") {
        for (var i = 0; i < 2; i++)
        {
          newhtml += "<input onclick='addImgUrl(" + "\"" + data.card_faces[i].image_uris.png + "\"" + ")' type='image' class='card' src='" + data.card_faces[i].image_uris.png + "' alt='Card' />";
        }
      } else { 
        imageUrl = data.image_uris.png;
        newhtml += "<input onclick='addImgUrl(" + "\"" + imageUrl + "\"" + ")' type='image' class='card' src='" + imageUrl + "' alt='Card' />";
      }
      $('#picture2').append(newhtml);*/
      $('#cardSearch').val(name);
    //}
  //});
}

$(function() {
  $('#hoverhide').hover(function() { 
      $('#showNumber').fadeOut("slow");
      $('#hoverhide').fadeOut("slow"); 
  }, function() {
      $('#showNumber').fadeIn("slow");
      $('#hoverhide').fadeIn("slow"); 
  });
});

function showCombos() {
  event.preventDefault();
  data={};
  data["user_name"] = 'FuriousAvatar';
  data["id"] = 1;
  u = data["id"];
  //data.forEach(element => {
    //data["id"] = element;
  //});
  newhtml1 = "";
  for (u; u < data["user_name"].length + 1; u++) {
    data["id"] = u;
    $.ajax({
      url: '/getCombos',
      type: 'GET',
      data: data,
      dataType: 'json', //will parse json into javascript object
      //callback called when succeed
      success: (data) => {
        console.log(data);
        var j = 0;
        for (var i = 0; i < data.length; i++) {
          newhtml1 += "<img class='card' src=" + JSON.stringify(data[i].image_uris) + ">";
          if (i == data.length - 1) {
            newhtml1 += "<br><p class='caption'>" + data[i].content + "<br>-submitted by " + data[i].user_name + "</p><br>";
          }
          if (data[i].combo_id != data[i+1].combo_id){ 
            newhtml1 += "<br><p class='caption'>" + data[i].content + "<br>-submitted by " + data[i].user_name + "</p><br>";
          }
          
        }
        $('#combos').html(newhtml1);
      }
    });
  }
}

function submitUsernameForm() {
  event.preventDefault();
  data={};
  data["user_name"] = $('#username').val();
  $.ajax({
    url: '/submitUsername',
    type: 'GET',
    data: data,
    dataType: 'json', //will parse json into javascript object
    success: (data) => {
      console.log('ajax success!', data);
    }
  });
  submitComboForm();
  return false;
}

function submitComboForm() {
  event.preventDefault();
  data={};
  /*data["image_uris1"] = $('#card1').val();
  data["image_uris2"] = $('#card2').val();
  data["image_uris3"] = $('#card3').val();
  data["image_uris4"] = $('#card4').val();
  data["image_uris5"] = $('#card5').val();*/
  var card = 0;
  for (var i = 1; i < 6; i++) {
    data["image_uris"+i] = $('#card'+i).val();
    if (data["image_uris"+i].length != 0){
      card++;
    }
  }
  data["numCards"] = card;
  console.log("cards="+card);
  data["user_name"] = $('#username').val();
  data["content"] = $('#explanation').val();
  $.ajax({
    url: '/submitCombo',
    type: 'GET',
    data: data,
    dataType: 'json', //will parse json into javascript object
    success: (data) => {
      console.log('ajax success!', data);
      submitCardsForm(card);
    }
  });
}

function submitCardsForm(card) {
  event.preventDefault();
  data={};
  for (var i = 1; i < 6; i++) {
    data["image_uris"+i] = $('#card'+i).val();
  }
  data["numCards"] = card;
  console.log("cards="+card);
  data["user_name"] = $('#username').val();
  /*data["image_uris1"] = $('#card1').val();
  data["image_uris2"] = $('#card2').val();
  data["image_uris3"] = $('#card3').val();
  data["image_uris4"] = $('#card4').val();
  data["image_uris5"] = $('#card5').val();*/
  $.ajax({
    url: '/submitCards',
    type: 'GET',
    data: data,
    dataType: 'json', //will parse json into javascript object
    success: (data) => {
      console.log('ajax success!', data);
      showCombos();
    }
  });
}