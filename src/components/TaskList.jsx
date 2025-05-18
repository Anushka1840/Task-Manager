import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, toggleComplete, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <pre><p>No tasks to display.
                   All are Completed &hearts;
    </p></pre>;
  }

  return (
    <div className='a'>
    <ul>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
    </div>
  );
}

export default TaskList;
