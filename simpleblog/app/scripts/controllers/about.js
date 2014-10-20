'use strict';

/**
 * @ngdoc function
 * @name simpleBlogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleBlogApp
 */
angular.module('simpleBlogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
