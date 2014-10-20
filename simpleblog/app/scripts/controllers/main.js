'use strict';

/**
 * @ngdoc function
 * @name simpleblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the simpleblogApp
 */
angular.module('simpleblogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
