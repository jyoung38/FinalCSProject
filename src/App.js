import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './App.css';

function App() 
{
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => 
  {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => 
  {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} /> {/* Ensure this line is here */}
    </div>
  );
}

export default App;
