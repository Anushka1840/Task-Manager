import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),      
      text: text,         
      completed: false     
    };
    setTasks([...tasks, newTask]); 
  }

  function toggleComplete(taskId) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId 
        ? { ...task, completed: !task.completed } 
        : task                                     
    );
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    const remainingTasks = tasks.filter(task => task.id !== taskId);
    setTasks(remainingTasks);
  }

  function editTask(taskId, newText) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId 
        ? { ...task, text: newText }
        : task
    );
    setTasks(updatedTasks);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (filter === 'All') return true;              
    if (filter === 'Completed') return task.completed;  
    if (filter === 'Pending') return !task.completed;   
    return true;
  });

  return (
    <div>
      <h1><i>&#128221;&#9200;Task Manager&#9200;&#128221;</i></h1>
      
      <TaskInput addTask={addTask} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TaskList 
        tasks={tasksToDisplay}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
     
    </div>
  );
}

export default App;
