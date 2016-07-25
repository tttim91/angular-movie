app.controller("HomeController", ['$scope', '$location', '$http', '$stateParams', function(s, l, h, state){
    if(state.query) {
        h.get('http://www.omdbapi.com/?s='+state.query).then(function(data) {
            s.view.returnedMovies = data.data.Search;
        })
    }
    s.view = {};
    s.view.returnedMovies = {};
    s.isActive = function (viewLocation) {
        return viewLocation === l.path();
    };
    // s.searchMovie = function(query) {
    //     console.log(query);
    //     h.get('http://www.omdbapi.com/?s='+query).then(function(data) {
    //         s.view.returnedMovies = data.data.Search;
    //     })
    // }
}]);

app.controller("SearchController", ['$scope', '$http', function(s, h) {

}])

app.controller("DetailController", ['$scope', '$http', '$stateParams', function(s, h, state) {
    s.movieDetail = {};
    console.log(state.id)
    h.get('http://www.omdbapi.com/?i='+state.id).then(function(details) {
        console.log(details)
        s.movieDetail.title = details.data.Title;
        s.movieDetail.actors = details.data.Actors;
        s.movieDetail.country = details.data.Country;
        s.movieDetail.genre = details.data.Language;
        s.movieDetail.metascore = details.data.Metascore;
        s.movieDetail.plot = details.data.Plot;
        s.movieDetail.rated = details.data.Rated;
        s.movieDetail.released = details.data.Released;
        s.movieDetail.poster = details.data.Poster;
        s.movieDetail.language = details.data.Language;
    })
}])
