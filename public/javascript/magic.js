function grab_card() {
  console.log('Grab Card');
  event.preventDefault();
  var data2 = $('form').serialize();
  var data3 = data2.replace(' ', '-');
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
      imageUrl = data.image_uris.png;
      newhtml = "";
      newhtml += "<input onclick='addImgUrl()' type='image' class='card' src='" + imageUrl + "' alt='Card' />";
      $('#picture2').append(newhtml);
    }//sucess data call
  });//ajax function call
}

function addImgUrl() {
  event.preventDefault();
  var data2 = $('form').serialize();
  $.ajax({
    url: '/getCard',
    type: 'GET',
    data: data2,
    dataType: 'json', //will parse json into javascript object
    //callback called when succeed
    success: (data) => {
      var i = 0;
      var max = 0;
      var i = parseInt($('#cardId').val());
      var max = (i + 1);
      //var i = 1;
      for (i; i < max; i++) {
        $('#card'+i).val(data.image_uris.png);
      }
      if (i == 6) {
        i = 1;
      }
      $('#cardId').val(i);
    }
  });
}

function grab_list() {
  console.log('Grab List');
  event.preventDefault();
  var data2 = $('form').serialize();
  //var data3 = data2.replace(' ', '-');
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
        newhtml2 += "<input type='button' onclick=\"fillName(" + "'" + data.data[i].name + "'" + ")\" value='" + data.data[i].name + "'id='" + data.data[i].name + "'/><br>";
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
  //var data2 = $('form').serialize();
  /*$.ajax({
    url: '/searchCard',
    type: 'GET',
    data: data2,
    dataType: 'json', //will parse json into javascript object
    //callback called when succeed
    success: (data) => {*/
      //image = data.image_uris.png;
      //newhtml3 = "";
      //newhtml3 += "<input type='image' class='card' src='" + name + "' alt='Card' />";
      $('#cardSearch').val(name);
    //}
  //});
}

/*function addImgUrl2() {
  event.preventDefault();
  var data2 = $('form').serialize();
  $.ajax({
    url: '/searchCard',
    type: 'GET',
    data: data2,
    dataType: 'json', //will parse json into javascript object
    //callback called when succeed
    success: (data) => {
      var i = 0;
      var max = 0;
      var i = parseInt($('#cardId').val());
      var max = (i + 1);
      //var i = 1;
      for (i; i < max; i++) {
        $('#card'+i).val(data.data[i].image_uris.png);
      }
      if (i == 6) {
        i = 1;
      }
      $('#cardId').val(i);
    }
  });
}*/

$(function() {
  $('#hoverhide').hover(function() { 
      $('#showNumber').fadeOut("slow");
      $('#hoverhide').fadeOut("slow"); 
  }, function() {
      $('#showNumber').fadeIn("slow");
      $('#hoverhide').fadeIn("slow"); 
  });
});