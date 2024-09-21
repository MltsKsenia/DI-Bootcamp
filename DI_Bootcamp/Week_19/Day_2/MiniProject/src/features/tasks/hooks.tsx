import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask, setFilter, selectFilteredTasks } from './tasksSlice';

export const useTasks = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectFilteredTasks);

    const addNewTask = (task: string) => dispatch(addTask(task));
    const deleteTask = (id: string) => dispatch(removeTask(id));
    const toggleTaskChecked = (id: string) => dispatch(toggleTask(id));
    const filterTasks = (filter: 'All' | 'Active' | 'Completed') => dispatch(setFilter(filter));

    return { tasks, addNewTask, deleteTask, toggleTaskChecked, filterTasks };
};