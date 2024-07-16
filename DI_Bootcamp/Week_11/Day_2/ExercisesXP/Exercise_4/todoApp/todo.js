class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ task, completed: false });
    }

    markTaskAsComplete(taskName) {
        const task = this.tasks.find(t => t.task === taskName);
        if (task) {
            task.completed = true;
        }
    }

    listAllTasks() {
        this.tasks.forEach(task => {
            console.log(`${task.task}: ${task.completed ? 'Completed' : 'Not Completed'}`);
        });
    }
}

export default TodoList;