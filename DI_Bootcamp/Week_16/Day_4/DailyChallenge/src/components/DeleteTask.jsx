import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../tasksSlice';

const DeleteTask = ({ selectedDate, task }) => {
    const dispatch = useDispatch();

    const handleDeleteTask = () => {
        dispatch(deleteTask({
            date: selectedDate,
            taskId: task.id,
        }));
    };

    return (
        <button onClick={handleDeleteTask}>Delete</button>
    );
};

export default DeleteTask;