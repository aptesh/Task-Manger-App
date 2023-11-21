import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskCategories = ({ categories, addCategory, removeCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleAddCategory = () => {
    addCategory(categoryName);
    setCategoryName('');
  };

  return (
    <div class="card mainContent">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category Name:</Form.Label>
        <Form.Control type="text" placeholder="Category Name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
      </Form.Group>
      
      <Button variant="outline-primary" onClick={handleAddCategory} >Add Category</Button>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            {category} <Button variant="outline-danger" onClick={() => removeCategory(category)} >Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCategories;
