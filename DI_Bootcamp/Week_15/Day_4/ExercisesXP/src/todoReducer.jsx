export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            // Добавление новой задачи в состояние
            return [...state, { id: Date.now(), text: action.text }];
        case "REMOVE_TODO":
            // Удаление задачи по ее id
            return state.filter((todo) => todo.id !== action.id);
        default:
            return state;
    }
}
