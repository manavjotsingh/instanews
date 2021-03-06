$(function() {
    $("#sections").on("change", function() {
      const $selected = $(this).val();
      appendArticles($selected);
    });    
  });

function appendArticles($selected){
    $.ajax({
     method: 'get',
     url: `https://api.nytimes.com/svc/topstories/v2/${$selected}.json?api-key=Y0Po2jNwx2e3WMMp9UNMY6gHcB6PJe75`,
    })
    .done(function ($data) { 

        const $articles = $data.results;
        const $filteredMedia = $articles
        .filter(function($filteredArticles) { 
        return $filteredArticles.multimedia[4] !== undefined;
                })
        .slice (0,12);

        $("#stories").html(""); // when function is ran it deletes all html there

        $.each ($filteredMedia, function (index, value){
            $("#stories").append(`<li class='article' style='background-image:url(${value.multimedia[4].url})'>
            <p>${value.abstract}</p></li>`);
            
        })
    });
    // console.log($filteredMedia)
}


