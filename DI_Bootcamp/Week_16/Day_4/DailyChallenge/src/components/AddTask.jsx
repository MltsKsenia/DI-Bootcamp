import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';

const AddTask = ({ selectedDate }) => {
    const [taskName, setTaskName] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (taskName) {
            dispatch(addTask({ date: selectedDate, task: { id: Date.now(), name: taskName } }));
            setTaskName('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Add Task"
            />
            <br />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default AddTask;