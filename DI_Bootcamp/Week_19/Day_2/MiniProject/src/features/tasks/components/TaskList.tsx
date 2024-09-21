import React from 'react';
import { ListItem } from '../../../model/ListItem';

interface TaskItemProps {
    task: ListItem;
    onToggle: () => void;
    onRemove: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onRemove }) => (
    <div>
        <input type="checkbox" checked={task.checked} onChange={onToggle} />
        {task.item}
        <button onClick={onRemove}>Remove</button>
    </div>
);

export default TaskItem;