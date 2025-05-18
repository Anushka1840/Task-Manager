import React, { useState } from 'react';

function TaskItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleEditClick() {
    setEditing(true);
    setNewName(task.text);
  }

  function handleCancelClick() {
    setEditing(false);
    setNewName("");
  }

  function handleEditSubmit(e) {
    e.preventDefault();
    if (!newName.trim()) {
      return;                     
    }
    editTask(task.id, newName);   
    setEditing(false);           
    setNewName("");               
  }

  const viewTemplate = (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleComplete(task.id)} 
        />
        {task.text}
      </label>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );

  const editingTemplate = (
    <form onSubmit={handleEditSubmit}>
      <input 
        type="text" 
        value={newName} 
        onChange={handleChange} 
      />
      <button type="submit">Save</button>
      <button type="button" onClick={handleCancelClick}>Cancel</button>
    </form>
  );

  return (
    <li className={task.completed ? "completed" : ""}>
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  );
}

export default TaskItem;
