'use strict';

/**
 * @ngdoc overview
 * @name simpleBlogApp
 * @description
 * # simpleBlogApp
 *
 * Main module of the application.
 */
angular
  .module('simpleBlogApp', [
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
      .when('/articles/add', {
        templateUrl: 'views/add-article.html',
        controller: 'ArticleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
