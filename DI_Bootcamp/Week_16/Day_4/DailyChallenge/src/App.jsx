import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import DatePicker from './components/DatePicker';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <Provider store={store}>
      <DatePicker onDateChange={setSelectedDate} />
      <TaskList selectedDate={selectedDate} />
      <AddTask selectedDate={selectedDate} />
    </Provider>
  );
};

export default App;