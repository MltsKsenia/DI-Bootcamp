import React, { useRef, useState } from 'react';
import { useTaskContext } from './TaskContext';

const TaskItem = ({ task }) => {
    const { dispatch } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);

    const handleEdit = () => {
        setIsEditing(true);
        setTimeout(() => editInputRef.current.focus(), 100);
    };

    const handleSave = () => {
        dispatch({
            type: 'EDIT_TASK',
            payload: { id: task.id, text: editInputRef.current.value },
        });
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <input ref={editInputRef} defaultValue={task.text} onBlur={handleSave} />
            ) : (
                <span onClick={handleEdit}>{task.text}</span>
            )}
            <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
                {task.completed ? 'Undo' : 'Complete'}
            </button>
        </div>
    );
};

export default TaskItem;