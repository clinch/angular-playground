'use strict';

describe('Service: LocalStorageService', function () {

  // load the service's module
  beforeEach(module('localStorageApp'));

  var LocalStorageService;

  // Initialize the Service
  beforeEach(inject(function (_LocalStorageService_) {
    LocalStorageService = _LocalStorageService_;
  }));

  it('should set and get the same values', function () {
    var val = 'Some value';
    LocalStorageService.setData(val);
    expect(LocalStorageService.getData()).toEqual(val);
  });
  
});
