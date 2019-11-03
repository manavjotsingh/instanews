$(function() {
    $("#sections").on("change", function() {
      console.log("selected");
      const selected = $(this).val();
      console.log(selected);
    });    
  });


$.ajax({
    method: 'get',
    url: 'https://api.nytimes.com/svc/topstories/v2/${selected}.json?api-key=Y0Po2jNwx2e3WMMp9UNMY6gHcB6PJe75',
    dataType: 'json'
})
    .done(function ($data) { 
const $articles = $data.results;
console.log($articles[1].multimedia[4].url);
console.log($articles[1].multimedia[3].url);
console.log($articles[1].multimedia[2].url);
console.log($articles[1].multimedia[1].url);
console.log($articles[1].multimedia[0].url);
console.log($articles[1].multimedia[4].caption);
console.log($articles[1].abstract);
console.log($articles[1].title);
console.log($articles[1].short_url);
    });




$('#stories').append(`<li class='article' style='background-image:url(https://placeimg.com/1000/960/any)'>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas illum amet consequuntur saepe minima, repellat consectetur debitis placeat sunt, quibusdam architecto. Velit ipsa est aut deserunt facilis, perferendis et quaerat!</p></li>`); // adds content at the end in the selected elements
