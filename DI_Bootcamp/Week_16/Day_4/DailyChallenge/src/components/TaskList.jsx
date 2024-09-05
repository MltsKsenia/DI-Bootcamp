import React from 'react';
import { useSelector } from 'react-redux';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

const TaskList = ({ selectedDate }) => {
    const tasks = useSelector((state) => state.tasks.tasksByDate[selectedDate] || []);

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span>{task.name}</span>
                    <EditTask selectedDate={selectedDate} task={task} />
                    <DeleteTask selectedDate={selectedDate} task={task} />
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
