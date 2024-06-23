document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const task = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        start: document.getElementById('start').value,
        end: document.getElementById('end').value,
        isCompleted: false
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('taskForm').reset();
    alert('Task added successfully!');
});