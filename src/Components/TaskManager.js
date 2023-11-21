import React, { useState, useEffect, useRef, useMemo } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskCategories from './TaskCategories';
import useLocalStorage from './useLocalStorage';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const priorities = ['Low', 'Medium', 'High'];

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [categories, setCategories] = useLocalStorage('categories', []);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const taskNameInputRef = useRef();

  useEffect(() => {
    console.log(taskNameInputRef);
    if(taskNameInputRef.current){
    taskNameInputRef.current.focus();
    }
  }, [taskNameInputRef]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const removeCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const filteredTasks = useMemo(() => {
    if (selectedCategory === 'All') {
      return tasks;
    }
    return tasks.filter((task) => task.category === selectedCategory);
  }, [tasks, selectedCategory]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} priorities={priorities} taskNameInputRef={taskNameInputRef} />
      <TaskCategories
        categories={categories}
        addCategory={addCategory}
        removeCategory={removeCategory}
      />
      <label>
        Filter by Category:
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <TaskList tasks={filteredTasks} priorities={priorities} />
    </div>
  );
};

export default TaskManager;
