import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTaskCompletion } from './tasksSlice';

const TaskEditor = ({ task }) => {
    const [title, setTitle] = useState(task.title);
    const dispatch = useDispatch();

    const handleEdit = useCallback(() => {
        dispatch(editTask({ ...task, title }));
    }, [title, task, dispatch]);

    const handleToggleCompletion = useCallback(() => {
        dispatch(toggleTaskCompletion(task.id));
    }, [task, dispatch]);

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleEdit}>Save</button>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleToggleCompletion}
            />
        </div>
    );
};

export default TaskEditor;