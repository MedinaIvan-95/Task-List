import './App.css';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import Search from './components/Search/Search';
import React , { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [newTask, setNewTask] = useState({});
  const [arrTask, setArrTask] = useState([]);

  return (
    <>
        <div className='main_container'>

          <div className='card_new_task'>
            <h1>Lista de Tareas</h1>
            <h2>5 Tareas completadas de 15</h2>
            <div className='addTask'>
              <AddTask 
              newTask={newTask}
              setNewTask={setNewTask}
              arrTask={arrTask}
              setArrTask={setArrTask}
              />
            </div>
          </div>
          
          <div className='task'>
            <Search/>
            {arrTask.map((task) => {
              return <Task key={uuidv4()} task={task.title} id={task.id} arrTask={arrTask} setArrTask={setArrTask} complete={task.complete}/>
            })}
          </div>
        </div>
        
    </>
  );
}

export default App;
