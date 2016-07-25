var app = angular.module("myApp", ['ui.router']);
app.config(function($stateProvider, $locationProvider) {
    $stateProvider
      .state('index', {
        url: "/?query",
        templateUrl: '../partials/home.html',
        controller: 'HomeController'
      })
      .state('detail', {
        url: '/show/:id',
      	templateUrl: '../partials/show.html',
      	controller: 'DetailController'
      })
    $locationProvider.html5Mode(true);
});
