// // scripts.js
$(document).ready(function(){

var url = 'https://petdibs.herokuapp.com/pets';

// Make a New Pet
var data = {
  name: "Bobcat",
  age: 50,
  breed: "cat"
}

var callback = function(){
  console.log("Success!");
};

$.post(url, data, callback);






// Show all pets

  var successCallback = function (response) {
    for (var i=0; i < response.length; i++ ){
      $('#pets').append("<h3><a href=" + url + "/" + response[i].id + ">" + response[i].name + "</a></h3>");
    }
  };

  $('#load').on('click', function(){
    $.get(url, successCallback);
  })


// Show Pet Information
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
