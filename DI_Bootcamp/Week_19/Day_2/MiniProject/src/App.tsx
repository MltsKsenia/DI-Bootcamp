import React, { useState } from 'react';
import TaskItem from './features/tasks/components/TaskList';
import { ListItem } from './model/ListItem';
import './App.css'

const App: React.FC = () => {
  // Example task
  const [task, setTask] = useState(new ListItem('1', 'Sample Task'));

  // Switcher task
  const handleToggle = () => {
    task.toggleChecked();
    setTask(new ListItem(task.id, task.item, task.checked));
  };

  // Delete
  const handleRemove = () => {
    console.log(`Task with id ${task.id} removed`);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <TaskItem task={task} onToggle={handleToggle} onRemove={handleRemove} />
    </div>
  );
};

export default App;