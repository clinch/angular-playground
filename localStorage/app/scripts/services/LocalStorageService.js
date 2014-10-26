'use strict';

/**
 * @ngdoc function
 * @name localStorageApp.service:LocalStorageService
 * @description
 * # LocalStorageService
 * Adds getters and setters for local storage
 */
angular.module('localStorageApp')
.factory("LocalStorageService", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
  	// ap-ls-data stands for Angular Playground Local Storage
    if (event.key === 'ap-ls-data') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(data) {
      $window.localStorage && $window.localStorage.setItem('ap-ls-data', data);
      return this;
    },
    getData: function() {
      return $window.localStorage && $window.localStorage.getItem('ap-ls-data');
    }
  };
});