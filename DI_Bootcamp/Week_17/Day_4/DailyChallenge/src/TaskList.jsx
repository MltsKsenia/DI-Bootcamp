import React from 'react';
import { useSelector } from 'react-redux';
import { selectTasksByCategory } from './selectors';
import { toggleTaskCompletion } from './tasksSlice';

const TaskList = ({ categoryId }) => {
    const tasks = useSelector(selectTasksByCategory(categoryId));

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTaskCompletion(task.id))}
                    />
                    {task.title}
                </li>
            ))}
        </ul>
    );
};

export default TaskList;