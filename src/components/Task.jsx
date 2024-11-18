import { mdiDelete, mdiDeleteEmpty } from '@mdi/js';
import { mdilPencil } from '@mdi/light-js';
import Icon from '@mdi/react';
import { default as React, useEffect, useState } from "react";
import './Task.css';


export default function Task({ task, index, completeTask, removeTask, countTasks, setTasksRemaining }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState('');
  const currentDateTime = new Date().toISOString().split('.')[0];
    const [selectedDateTime, setSelectedDateTime] = useState(currentDateTime);
    const handleCheckboxChange = () => {
        completeTask(index);
        setTasksRemaining(countTasks);
    };
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
      <div className={`task ${task.isCompleted ? "completed" : ""}`} style={{ textDecoration: task.completed ? "line-through" : "" }}>
          <div className="mobile-date"><div className="mobile-date2"><p>{task.time ? task.time : 'No time set'}</p></div></div>
      <div className="data">
          <div className="checkbox checkbox-wrapper-31">
            <input type="checkbox" checked={task.isCompleted}
                onChange={handleCheckboxChange} onClick={() => completeTask(index)}/>
                <svg viewBox="0 0 35.6 35.6">
                    <circle class="background" cx="17.8" cy="17.8" r="17.8"></circle>
                    <circle class="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                    <polyline class="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                </svg>
          </div>
          <div className="input">
      {isEditing ? (
        <input
          className="typing-container"
          placeholder={inputText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
      ) : (
        <input
          className='typing-container'
          placeholder={task.title}
          disabled
        />
      )}
          </div>
        <div className="BTN">
          <button className='btn btn-edit' onClick={() => handleEdit(index)}>
            <Icon className='pen' path={mdilPencil} size={1} />
          </button>
          <button className='btn btn-delete' onClick={() => removeTask(index)}>
            <Icon path={mdiDelete} size={1} className='mdi mdi-delete mdi-24px'/>
            <Icon path={mdiDeleteEmpty} size={1} className='mdi mdi-delete-empty mdi-24px'/>
      </button>
      
                </div>
              </div>
              <div className="date-div">
                 <p>{task.time ? task.time : 'No time set'}</p>
              </div>
        </div>
      
  );
}

