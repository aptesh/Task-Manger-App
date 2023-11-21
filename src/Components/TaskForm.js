import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = ({ addTask, priorities }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const taskNameInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ taskName, description, priority });
    setTaskName('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <div class="card mainContent">
    <form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Task Name</Form.Label>
        <Form.Control type="text" placeholder="Task Name" value={taskName}  onChange={(e) => setTaskName(e.target.value)} ref={taskNameInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Task Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Label>Priority</Form.Label>
      <Form.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
      {priorities.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
    </Form.Select>

      <Button  variant="outline-primary btm-add" type="submit">Add Task</Button>
    </form>
    </div>
  );
};

export default TaskForm;
