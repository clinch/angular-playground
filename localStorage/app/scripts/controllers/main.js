'use strict';

/**
 * @ngdoc function
 * @name localStorageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localStorageApp
 */
angular.module('localStorageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.updateData = function(newValue) {
    	$scope.storedData = newValue;
    };

    // Set a reference to this controller.
    $scope.MainCtrl = this;
  });
