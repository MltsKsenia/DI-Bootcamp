import React, { useReducer, useState } from "react";
import { todoReducer } from "./todoReducer";

function TodoList() {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [todoText, setTodoText] = useState("");

    const handleAddTodo = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: "ADD_TODO", text: todoText });
        setTodoText("");
    };

    const handleRemoveTodo = (id) => {
        dispatch({ type: "REMOVE_TODO", id });
    };

    return (
        <div>
            <h1>Exercise 3</h1>
            <h2>Todo List</h2>
            <input
                type="text"
                placeholder="Add new task"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                style={{ width: "100%", height: "20px", margin: "5px 0" }}
            />
            <br />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}
                        style={{ listStyle: "none" }}>
                        {todo.text}
                        <button onClick={() => handleRemoveTodo(todo.id)}
                            style={{ margin: "5px" }}>
                            Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;