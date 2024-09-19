import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import TaskList from './TaskList';
import CategorySelector from './CategorySelector';
import './App.css'

const App = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  return (
    <Provider store={store}>
      <div>
        <h1>Productivity Tracker</h1>
        <CategorySelector
          selectedCategoryId={selectedCategoryId}
          setSelectedCategoryId={setSelectedCategoryId}
        />
        <TaskList categoryId={selectedCategoryId} />
      </div>
    </Provider>
  );
};

export default App;