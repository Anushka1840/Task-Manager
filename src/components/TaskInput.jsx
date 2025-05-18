import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();            
    if (!text.trim()) {
      return;                      
    }
    addTask(text);                 
    setText("");                  
  }

  return (
    <div className='input'>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Enter a new task&#9997;" 
      />
      <button type="submit">Add Task&#10133;</button>
    </form>
    </div>
  );
}

export default TaskInput;
