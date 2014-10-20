'use strict';

/**
 * @ngdoc function
 * @name simpleblogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the simpleblogApp
 */
angular.module('simpleblogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
