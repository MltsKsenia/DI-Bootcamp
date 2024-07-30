const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const tasksFilePath = path.join(__dirname, '../tasks.json');

const readTasks = () => {
    try {
        const data = fs.readFileSync(tasksFilePath);
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading tasks:', error);
        return [];
    }
};

const writeTasks = (tasks) => {
    try {
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error('Error writing tasks:', error);
    }
};

router.get('/', (req, res) => {
    const tasks = readTasks();
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === parseInt(req.params.id, 10));

    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
});

router.post('/', (req, res) => {
    const tasks = readTasks();
    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed || false
    };

    if (!newTask.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    tasks.push(newTask);
    writeTasks(tasks);
    res.status(201).json(newTask);
});

router.put('/:id', (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id, 10));

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    const updatedTask = {
        ...tasks[taskIndex],
        title: req.body.title !== undefined ? req.body.title : tasks[taskIndex].title,
        description: req.body.description !== undefined ? req.body.description : tasks[taskIndex].description,
        completed: req.body.completed !== undefined ? req.body.completed : tasks[taskIndex].completed
    };

    if (!updatedTask.title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    tasks[taskIndex] = updatedTask;
    writeTasks(tasks);
    res.json(updatedTask);
});

router.delete('/:id', (req, res) => {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id, 10));

    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }

    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    res.status(204).end();
});

module.exports = router;
