import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskList = ({ tasks, priorities }) => {
  const groupTasksByPriority = () => {
    const groupedTasks = {};
    priorities.forEach((priority) => {
      groupedTasks[priority] = tasks.filter((task) => task.priority === priority);
    });
    return groupedTasks;
  };

  const renderTasks = () => {
    const groupedTasks = groupTasksByPriority();

    return priorities.map((priority) => (
      <div class="card mainContent" key={priority}>
        <h3>{priority} Priority</h3>
        {groupedTasks[priority].map((task) => (
          <div key={task.id} className={`task ${task.priority.toLowerCase()}`}>
            <strong>{task.taskName}</strong>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    ));
  };

  return <div>{renderTasks()}</div>;
};

export default TaskList;
