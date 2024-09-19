import { createSelector } from '@reduxjs/toolkit';

export const selectTasks = (state) => state.tasks.tasks;
export const selectCategories = (state) => state.categories.categories;

export const selectTasksByCategory = (categoryId) =>
    createSelector(
        [selectTasks],
        (tasks) => tasks.filter((task) => task.category === categoryId)
    );

export const selectCompletedTasks = createSelector(
    [selectTasks],
    (tasks) => tasks.filter((task) => task.completed)
);

export const selectCategoryById = (categoryId) =>
    createSelector(
        [selectCategories],
        (categories) => categories.find((category) => category.id === categoryId)
    );