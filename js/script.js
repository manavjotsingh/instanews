


$.ajax({
    method: 'get',
    url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=Y0Po2jNwx2e3WMMp9UNMY6gHcB6PJe75',
    dataType: 'json'
})
    .done(function ($data) { 
const $articles = $data.results;
console.log($articles[1].multimedia[4].url);
    })

      