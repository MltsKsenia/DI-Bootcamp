import TodoList from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Learn JavaScript');
myTodoList.addTask('Learn ES6 Modules');
myTodoList.addTask('Build a Todo List App');

myTodoList.markTaskAsComplete('Learn JavaScript');

console.log('All Tasks:');
myTodoList.listAllTasks();

// node app.js
// All Tasks:
// Learn JavaScript: Completed
// Learn ES6 Modules: Not Completed
// Build a Todo List App: Not Completed