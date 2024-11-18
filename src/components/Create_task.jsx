import React, { useEffect, useState } from 'react';
import './Create_task.css';

export default function CreateTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    addTask(title, selectedTime);
    setTitle("");
    setSelectedTime("");
  };

  return (
      <form className='input-task' onSubmit={handleSubmit}>
        <div className="input-text">
      <input
        className='text-field'
        type="text"
        value={title}
        placeholder="Add a new task"
        onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-time">
      <input
        className='time-field'
        type="time"
        value={selectedTime}
        onChange={(e) => setSelectedTime(e.target.value)}
          />
        </div>
        <div className="addBTN">
          <button type="submit" className='add'>Add Task</button>
          </div>
      </form>
  );
}