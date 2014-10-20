'use strict';

/**
 * @ngdoc overview
 * @name simpleblogApp
 * @description
 * # simpleblogApp
 *
 * Main module of the application.
 */
angular
  .module('simpleblogApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
