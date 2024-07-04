import React from 'react';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onCompleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task key={index} task={task} onComplete={() => onCompleteTask(index)} />
      ))}
    </div>
  );
};

export default TaskList;
