import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../action';

const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.payload, completed: false }];
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                index === action.payload
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case REMOVE_TODO:
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export default todosReducer;
