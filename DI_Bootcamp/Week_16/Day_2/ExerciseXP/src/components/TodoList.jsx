import React from 'react';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    <span
                        onClick={() => toggleTodo(index)}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </span>
                    <button onClick={() => removeTodo(index)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
