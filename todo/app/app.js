var todoApp = angular.module('todoApp', []);

/**
 * TodoCrtl
 * Main controller for the Todo List app/view
 */
todoApp.controller('TodoCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {

    // Start with an empty list of todos
    $scope.todos = [  ];

    // numComplete should always equal $scope.todos - numPending
    this.numComplete = 0;
    this.numPending = 0;

    /**
     * addTodo
     * This is used to add new todos to our list. It will use the string 
     * contained in $scope.newTodo and set it to pending.
     */
    this.addTodo = function() {
	// If there's no item, then don't add it
	if ($scope.newTodo == '') return;

        // Add a new item, and automatically mark it as incomplete
        $scope.todos.push({name: $scope.newTodo, completed: false});
        
        // Clear the todo for the next one
        $scope.newTodo = '';

        // Watch all the items to update summaries when one has changed
        $scope.$watch('todos', function() {
            $scope.todoApp.updateSummary();
        }, true);
        
    }

    /**
     * updateSummary
     * Used when our list of todos has changed and we need to update the 
     * total number of complete and pending todos.
     */
    this.updateSummary = function() {
        this.numPending = filterFilter($scope.todos, { completed: false }).length;
        this.numComplete = $scope.todos.length - this.numPending;
    }
    
   
    // Make a reference to ourself to make calling methods easier
    $scope.todoApp = this;
}]);

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

        }
    };
});
