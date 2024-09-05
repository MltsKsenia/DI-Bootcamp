import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../tasksSlice';

const EditTask = ({ selectedDate, task }) => {
    const [taskName, setTaskName] = useState(task.name);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        if (taskName) {
            dispatch(editTask({
                date: selectedDate,
                taskId: task.id,
                updatedTask: { ...task, name: taskName },
            }));
        }
    };

    return (
        <div>
            <input
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Edit Task"
            />
            <button onClick={handleEditTask}>Edit</button>
        </div>
    );
};

export default EditTask;