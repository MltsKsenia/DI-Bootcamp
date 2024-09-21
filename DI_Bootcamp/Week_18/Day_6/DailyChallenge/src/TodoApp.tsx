import React, { useState } from 'react';
import List from './List';
import { Todo } from './types';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        { id: 1, text: 'Learn TypeScript' },
        { id: 2, text: 'Build a React app' },
    ]);

    const addTodo = () => {
        const newTodo: Todo = {
            id: Date.now(), // Unique ID based on timestamp
            text: `New task at ${new Date().toLocaleTimeString()}`,
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const renderTodo = (todo: Todo) => <span>{todo.text}</span>;

    return (
        <div>
            <h1>Todo List</h1>
            <button onClick={addTodo}>Add Todo</button>
            <List items={todos} renderItem={renderTodo} />
        </div>
    );
};

export default TodoApp;