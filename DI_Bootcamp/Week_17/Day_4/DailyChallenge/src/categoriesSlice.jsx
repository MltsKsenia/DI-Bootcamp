import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories: [
        { id: 1, name: 'Work' },
        { id: 2, name: 'Learning' },
    ],
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        editCategory: (state, action) => {
            const category = state.categories.find((c) => c.id === action.payload.id);
            if (category) {
                category.name = action.payload.name;
            }
        },
        deleteCategory: (state, action) => {
            state.categories = state.categories.filter((c) => c.id !== action.payload);
        },
    },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;