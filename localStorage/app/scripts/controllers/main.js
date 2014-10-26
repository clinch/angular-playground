'use strict';

/**
 * @ngdoc function
 * @name localStorageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the localStorageApp
 */
angular.module('localStorageApp')
  .controller('MainCtrl', function ($scope, LocalStorageService) {

  	$scope.storedData = LocalStorageService.getData();

    this.updateData = function(newValue) {
    	$scope.storedData = newValue;

    	LocalStorageService.setData(newValue);
    };

    // Set a reference to this controller.
    $scope.MainCtrl = this;
  });
