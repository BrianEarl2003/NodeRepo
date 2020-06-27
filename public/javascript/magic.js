/*function grab_card() 
{
    console.log('checkout run');
    $.ajax({
        url: '/getCard',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            console.log('ajax success!', data);
            //card = "";

        }
    });
}*/
function grab_card()
    {
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
          
          newhtml1 = "";
          newhtml2 = "";
          //image = data;
          newhtml1 += "<p>" +  JSON.stringify(data)  + "</p>";
          newhtml2 += "<img class='card' src='" + data.image_uris.png + "' alt='Card'>" + "</img>";
          $('#json').html(newhtml1);
          $('#picture').html(newhtml2);
        }//sucess data call
      });//ajax function call
      //CART CLICK AJAX END
    }//cartPopup on click