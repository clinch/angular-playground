describe('Sanity test', function(){
    it('should be true', function(){
        expect(true).toBe(true);
    });
});

describe('Unit: TodoCtrl', function() {
  beforeEach(module('todoApp'));

  var ctrl, scope;

  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('TodoCtrl', { $scope: scope });
  }));

  it('should initialize with no todos', function() {
    expect(scope.todos.length).toEqual(0);
  });

  it('should add a single todo each call', function() {
    scope.newTodo = 'Do first test';
    scope.todoApp.addTodo();
    expect(scope.todos.length).toEqual(1);
    scope.newTodo = 'Do second test';
    scope.todoApp.addTodo();
    expect(scope.todos.length).toEqual(2);
  });

  it('should not allow addition of empty todos', function() {
    scope.newTodo = '';
    scope.todoApp.addTodo();
    expect(scope.todos.length).toEqual(0);
  });

  it('should default to incomplete todos when adding', function() {
    scope.newTodo = 'Incomplete';
    scope.todoApp.addTodo();
    expect(scope.todos[scope.todos.length - 1].completed).toBe(false);
  });
});
