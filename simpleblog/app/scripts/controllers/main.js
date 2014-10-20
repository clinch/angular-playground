'use strict';

/**
 * @ngdoc function
 * @name simpleBlogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleBlogApp
 */
angular.module('simpleBlogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
