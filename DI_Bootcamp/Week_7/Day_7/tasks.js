function displayTasks() {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = '';

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.sort((a, b) => new Date(a.start) - new Date(b.start));

    tasks.forEach((task, index) => {
        const startDate = new Date(task.start);
        const endDate = new Date(task.end);
        const now = new Date();
        const daysLeft = Math.floor((endDate - now) / (1000 * 60 * 60 * 24));

        let taskElement = document.createElement('div');
        taskElement.className = `task ${task.isCompleted ? 'completed' : (daysLeft < 0 ? 'expired' : 'uncompleted')}`;

        const startDay = startDate.getDay();
        const startHour = startDate.getHours();
        const endHour = endDate.getHours();

        taskElement.style.top = `${startHour / 24 * 100}%`;
        taskElement.style.left = `${startDay * 14.28}%`;
        taskElement.style.height = `${(endHour - startHour) / 24 * 100}%`;
        taskElement.style.width = '14.28%';

        taskElement.innerHTML = `
        <div id="tasksContainer">
            <span>${task.name}</span>
            <input type="checkbox" ${task.isCompleted ? 'checked' : ''} onchange="toggleCompletion(${index})">
            <button onclick="deleteTask(${index})">X</button>
            <button onclick="editTask(${index})">Edit</button>
            <div class="description" style="display:none;">${task.description}</div>
        </div>
        `;

        taskElement.addEventListener('click', () => {
            const desc = taskElement.querySelector('.description');
            desc.style.display = desc.style.display === 'none' ? 'block' : 'none';
        });

        tasksContainer.appendChild(taskElement);
    });
}

function toggleCompletion(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].isCompleted = !tasks[index].isCompleted;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks[index];

    const name = prompt('Edit task name:', task.name);
    const description = prompt('Edit task description:', task.description);
    const start = prompt('Edit start date and time:', task.start);
    const end = prompt('Edit end date and time:', task.end);

    if (name && description && start && end) {
        task.name = name;
        task.description = description;
        task.start = start;
        task.end = end;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
    }
}

displayTasks();
