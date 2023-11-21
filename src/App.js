import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskManager from './Components/TaskManager';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
