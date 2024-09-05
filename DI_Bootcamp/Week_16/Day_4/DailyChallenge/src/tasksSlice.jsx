import { createSlice } from '@reduxjs/toolkit';
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksByDate: {},
    },
    reducers: {


        addTask: (state, action) => {
            const { date, task } = action.payload;
            if (!state.tasksByDate[date]) {
                state.tasksByDate[date] = [];
            }
            state.tasksByDate[date].push(task);
        },


        editTask: (state, action) => {
            const { date, taskId, updatedTask } = action.payload;
            const tasks = state.tasksByDate[date];
            if (tasks) {
                const index = tasks.findIndex((task) => task.id === taskId);
                if (index !== -1) {
                    tasks[index] = updatedTask;
                }
            }
        },


        deleteTask: (state, action) => {
            const { date, taskId } = action.payload;
            state.tasksByDate[date] = state.tasksByDate[date].filter(
                (task) => task.id !== taskId
            );
        },
    },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;