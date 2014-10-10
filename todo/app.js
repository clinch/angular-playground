var todoApp = angular.module('todoApp', []);

/**
 * TodoCrtl
 * Main controller for the Todo List app/view
 */
todoApp.controller('TodoCtrl', function($scope) {

    // Start with an empty list of todos
    $scope.todos = [  ];

    this.addTodo = function() {
        // Add a new item, and automatically mark it as incomplete
        $scope.todos.push({name: $scope.newTodo, completed: false});
        
        // Clear the todo for the next one
        $scope.newTodo = '';
    }

    $scope.word = function() { alert ("Word!"); };

    // Make a reference to ourself to make calling methods easier
    $scope.todoApp = this;
});

/**
 * todoList (Directive)
 * A list of either complete or incomplete todo items.
 * filterFilter :   To be used for filtering arrays
 */
todoApp.directive('todoList', ['filterFilter', function(filterFilter) {
    return {
        restrict: 'E',
        templateUrl: 'todo-list.html',
        scope: {
            todos: '='
        },
        link: function (scope, element, attrs) {
            // It's important to watch the 'length' property of the array
            // rather than the entire array. 
            scope.$watch('todos', 
                function() {
                    // todos has changed. Regenerate filteredArray.    
                    scope.applyFilter();
                }, 
                // We set the 'deep' flag to search every element for changes. 
                // This is slightly inefficient, and may eventually need to be 
                // refactored for efficiency
                true
            );

            scope.applyFilter = function() {
                // attrs.display will be either 'pending' or 'complete'
                // Use this attribute to show either pending or completed todos. Missing
                // params will include ALL todos by default.
                if ('pending' == attrs.display) {
                    scope.filteredTodos = filterFilter(scope.todos, { completed: false });
                } else if ('complete' == attrs.display) {
                    scope.filteredTodos = filterFilter(scope.todos, { completed: true });
                } else {
                    scope.filteredTodos = scope.todos;
                }    
            }

        }
    };

    

}]);

/**
 * todoItem (Directive)
 * The items within my todo list. Sometimes these will have checkboxes.
 * Other times, they'll be crossed out (completed). 
 */
todoApp.directive('todoItem', function() {
    return {
        restrict: 'A',
        templateUrl: 'todo-item.html',
        transclude: true,
        scope: {
            todo: "="
        },
        link: function(scope) {
            scope.word = function() { 
                console.log(scope.todo); // For debugging
                scope.todo.completed = true;
            } 
        }
    };
});
