import React from 'react';
import './Task.css';

const Task = ({ task, onComplete }) => {
  return (
    <div className="task">
      <span className={task.complete ? 'task-complete' : ''}>
        {task.description} {task.category ? `(${task.category})` : ''}
      </span>
      <button className="complete-btn" onClick={onComplete}>Complete</button>
    </div>
  );
};

export default Task;

