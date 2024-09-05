import './App.css'
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './action';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = ({ todos, addTodo, toggleTodo, removeTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
