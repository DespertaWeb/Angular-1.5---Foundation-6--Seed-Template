$(document).foundation();

angular.module('myApp',['ui.router'])

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home',{
      url:'/',
      views:{
        'header':{templateUrl:'views/header.html'}
      }
    })

    $urlRouterProvider.otherwise('/');




}) // /CONFIG


;
