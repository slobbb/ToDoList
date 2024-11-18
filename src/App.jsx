import React, { useEffect, useState } from 'react';
import CreateTask from './components/Create_task';
import Nav from './components/Nav';
import Task from './components/Task';
import './components/Todo.css';

function App() {
  
    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([]);
    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });


    const addTask = (title, time) => {
    const newTasks = [...tasks, { title, completed: false, time }];
    setTasks(newTasks);
};

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
         <div className="App">
            <Nav/>
          <div className="todo-container">
              <div className="title">Pending tasks ({tasksRemaining})</div>
                    <div className="create-input">
                        <CreateTask addTask={addTask} />
                    </div>
                
                <div className="tasks">
                  {tasks.map((task, index) => (
                      <Task
                      task={task}
                      index={index}
                      completeTask={completeTask}
                      removeTask={removeTask}
                      key={index}
                      time={index}
                      countTasks={tasks.filter(task => !task.isCompleted).length}
                      setTasksRemaining={setTasksRemaining}
                      />
                  ))}
                  </div>
              </div>
          </div>
    );
}

export default App;
