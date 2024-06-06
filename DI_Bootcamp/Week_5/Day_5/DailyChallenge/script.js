const tasks = [];

document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
});

document.getElementById('clearTasks').addEventListener('click', function () {
    clearTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    const taskId = tasks.length;
    const task = {
        task_id: taskId,
        text: taskText,
        done: false
    };
    tasks.push(task);

    renderTask(task);

    taskInput.value = '';
}

function renderTask(task) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';
    taskDiv.setAttribute('data-task-id', task.task_id);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => toggleTaskDone(task.task_id));

    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = task.text;

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
    deleteButton.addEventListener('click', () => deleteTask(task.task_id));

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskTextSpan);
    taskDiv.appendChild(deleteButton);

    document.querySelector('.listTasks').appendChild(taskDiv);
}

function toggleTaskDone(taskId) {
    const task = tasks.find(t => t.task_id === taskId);
    if (task) {
        task.done = !task.done;
        const taskTextSpan = document.querySelector(`.task[data-task-id="${taskId}"] .task-text`);
        if (task.done) {
            taskTextSpan.classList.add('done');
        } else {
            taskTextSpan.classList.remove('done');
        }
    }
}

function deleteTask(taskId) {
    const taskIndex = tasks.findIndex(t => t.task_id === taskId);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        const taskDiv = document.querySelector(`.task[data-task-id="${taskId}"]`);
        taskDiv.remove();
    }
}

function clearTasks() {
    tasks.length = 0;
    document.querySelector('.listTasks').innerHTML = '';
}