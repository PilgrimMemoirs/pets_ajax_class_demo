// // scripts.js
$(document).ready(function(){

  // Which URL do we want to 'get'?
  var url = 'https://petdibs.herokuapp.com/pets';

  // What do we want to happen when we get our response?
  var successCallback = function (response) {
    for (var i=0; i < response.length; i++ ){
      $('#pets').append("<h3><a href=" + url + "/" + response[i].id + ">" + response[i].name + "</a></h3>");
    }
  };

  $('#load').on('click', function(){
    $.get(url, successCallback);
  })


//click on a pet, show more information on that pet
//click event, that will make an ajax get request for that specific pet, by ID
// If successful, then have a pop-up with pets info

$('#pets').on('click', 'a', function(e){
  e.preventDefault();

  $('#profile').show();
  var petUrl = $(this).attr('href');

  $.get(petUrl, function(pet){
    $('#name').text(pet.name);
    $('#age').text(pet.age);
    $('#breed').text(pet.breed);
  }).always(function(){
    $("#message").text("Something happened");
  }).fail(function(){
    alert("Failed.");
  })
});



}); // ending $(document).ready
