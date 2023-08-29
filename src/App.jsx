
import './App.css'
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

    return (
      <section className='text-center' >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/create-task' element={<TaskForm />} />
            <Route path='/edit-task/:id' element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </section>
    )
}

export default App
