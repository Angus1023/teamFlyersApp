angular.module("flyersApp", ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.when('', '/');
  // $urlRouterProvider.otherwise('/');

  $stateProvider
    .state("home", {
      templateUrl: "home/home.html",
      controller: "homeCtrl",
      url: "/"
    })
    .state("about", {
      templateUrl: "about/about.html",
      controller: "aboutCtrl",
      url: "/about/ :id"
    })
    .state('players', {
      templateUrl: "players/players.html",
      controller: "playersCtrl",
      url: '/players'
    })
})


