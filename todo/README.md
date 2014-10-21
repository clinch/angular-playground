# todo

This is a simple todo list written in Angular. Use app here: http://clinch.github.io/angular-playground/todo/app/

The key features in the HTML markup are:

- A basic form which accepts a new Todo item and adds it using todoApp.addTodo()
- A directive made for a list of todos that can show 'pending', 'complete' or all todos

## Todo items for this app:

- It seems inefficient to set up a "deep" $watch on the main todo list for every todo list in the controller, as well as the summary watch as well. There's likely a better way to handle it.