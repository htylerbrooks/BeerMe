$(document).ready(function(){
  console.log("Lets go!");

  $('form#search input[type=submit]').on("click", searchOpenBeerDB);
});

var keyword = $("#search-keyword").val();

var url = 'http://api.brewerydb.com/v2/search?q=coors&type=beer&key=aae5c8039d40d4cad7ada705c75745d2';

function searchOpenBeerDB(event){

  event.preventDefault();

  var container = $("#results");

  $.ajax({
    url: url,
    method:"get",
    dataType: "json"
  }).done(function(result) {
      container.append(result["data"][1]["name"]);
    // resultsDisplay(result);
  });

}

  // function resultsDisplay (result) {
  //   var container = $("#results");
  //   container.append(results.name + " Description: " + results.description)
  // }