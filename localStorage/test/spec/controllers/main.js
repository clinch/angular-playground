'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('localStorageApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should save new data after updating', function () {
    scope.MainCtrl.updateData('Test');
    expect(scope.storedData).toBe('Test');
  });

  it('should have something in data after storage', function () {
    expect(scope.storedData).toBeDefined();
  });

});
