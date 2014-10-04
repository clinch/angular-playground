var todoApp = angular.module('todoApp', []);

/**
 * TodoCrtl
 * Main controller for the Todo List app/view
 */
todoApp.controller('TodoCtrl', function($scope) {

    // Start with an empty list of todos
    $scope.todos = [ ];

    this.addTodo = function() {
        // Add a new item, and automatically mark it as incomplete
        $scope.todos.push({name: $scope.newTodo, completed: false});
        
        // Clear the todo for the next one
        $scope.newTodo = '';
    }

    // Make a reference to ourself to make calling methods easier
    $scope.todoApp = this;
});

/**
 * todoList (Directive)
 * A list of either complete or incomplete todo items.
 */
todoApp.directive('todoList', function() {
    return {
        restrict: 'E',
        templateUrl: 'todo-list.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attrs) {
            // attrs.display will be either 'pending' or 'complete'
            console.log(attrs.display); 

            // Use example from https://docs.angularjs.org/guide/filter and
            // 'filter' Filter here: https://docs.angularjs.org/api/ng/filter/filter
        }
    };

});

/**
 * todoItem (Directive)
 * The items within my todo list. Sometimes these will have checkboxes.
 * Other times, they'll be crossed out (completed). 
 */
todoApp.directive('todoItem', function() {
    return {
        restrict: 'A',
        templateUrl: 'todo-item.html',
        transclude: true
    };
});
