'use strict';

/**
 * @ngdoc function
 * @name simpleBlogApp.controller:ArticleCtrl
 * @description
 * # ArticleCtrl
 * Controller of the articles in simpleBlogApp
 */
angular.module('simpleBlogApp')
  .controller('ArticleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
