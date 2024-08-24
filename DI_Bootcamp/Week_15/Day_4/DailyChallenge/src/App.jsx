import React from 'react';
import { TaskProvider } from './TaskContext';
import TaskList from './TaskList';
import FilterButtons from './FilterButtons';
import TodoList from './TodoList';
import './App.css';

function App() {
  return (
    <TaskProvider>
      <TodoList />
      <FilterButtons />
      <TaskList />
    </TaskProvider>
  );
}

export default App;