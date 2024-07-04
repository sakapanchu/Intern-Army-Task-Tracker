import React, { useState } from 'react';
import TaskList from './TaskList';
import './TaskManager.css';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const addTask = () => {
    const newTask = { description, complete: false, category };
    setTasks([...tasks, newTask]);
    setDescription('');
    setCategory('');
  };

  const completeTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, complete: true } : task
    );
    setTasks(newTasks);
  };

  const filterTasksByCategory = (category) => {
    if (category === '') {
      return tasks;
    }
    return tasks.filter(task => task.category === category);
  };

  return (
    <div className="task-manager">
      <h1>Task Manager</h1>
      <div className="input-group">
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category (optional)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>Add Task</button>
      </div>
      <h2>All Tasks</h2>
      <TaskList tasks={tasks} onCompleteTask={completeTask} />
      <h2>Filter Tasks by Category</h2>
      
      <input 
        className="filter-input"
        type="text"
        placeholder="Enter category to filter"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      />
    
      <TaskList tasks={filterTasksByCategory(filterCategory)} onCompleteTask={completeTask} />
    </div>
  );
};

export default TaskManager;

