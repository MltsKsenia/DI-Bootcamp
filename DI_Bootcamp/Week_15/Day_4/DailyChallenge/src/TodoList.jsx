import React, { useState } from 'react';
import { useTaskContext } from './TaskContext';

function TodoList() {
    const { dispatch } = useTaskContext();
    const [todoText, setTodoText] = useState("");

    const handleAddTodo = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: "ADD_TASK", payload: { id: Date.now(), text: todoText, completed: false } });
        setTodoText("");
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add new task"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                style={{ width: "100%", height: "20px", margin: "5px 0" }}
            />
            <br />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default TodoList;