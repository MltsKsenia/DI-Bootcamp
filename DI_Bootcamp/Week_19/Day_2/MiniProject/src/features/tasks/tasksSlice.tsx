import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from '../../model/ListItem';
import { RootState } from '../../app/store';

interface TasksState {
    tasks: ListItem[];
    filter: 'All' | 'Active' | 'Completed';
}

const initialState: TasksState = {
    tasks: [],
    filter: 'All',
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask = new ListItem(Date.now().toString(), action.payload);
            state.tasks.push(newTask);
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) task.toggleChecked();
        },
        setFilter: (state, action: PayloadAction<'All' | 'Active' | 'Completed'>) => {
            state.filter = action.payload;
        },
    },
});

export const { addTask, removeTask, toggleTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilteredTasks = (state: RootState) => {
    switch (state.tasks.filter) {
        case 'Active':
            return state.tasks.tasks.filter(task => !task.checked);
        case 'Completed':
            return state.tasks.tasks.filter(task => task.checked);
        default:
            return state.tasks.tasks;
    }
};