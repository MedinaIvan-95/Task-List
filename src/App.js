import './App.css';
import Task from './components/Task/Task';
import AddTask from './components/AddTask/AddTask';
import Search from './components/Search/Search';
import React , { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './customHooks/cusotmHooks';

function App() {
  
  const {arrTask, setArrTask} = useLocalStorage();
  const [newTask, setNewTask] = useState({});
  const [searchTask, setSearchTask] = useState("");
  const [inputSearchAnim,setInputSearchAnim] = useState("search-input-hidden");

  const taskComplete = arrTask.filter( arr => arr.complete === true).length;
  const taskLength = arrTask.length;

  const filterTask = arrTask.filter( arr => arr.title.toLocaleLowerCase().includes(searchTask));

  return <>
        <div className='main_container'>

          <div className='card_new_task'>
            <h1>{taskComplete === taskLength && taskComplete!== 0 ? "Felicidades Has Completado Todas las Tareas!!!": "Lista de Tareas"}</h1>
            <h2>{taskComplete} Tareas completadas de {taskLength}</h2>
            <div className='addTask'>
              <AddTask 
              newTask={newTask}
              setNewTask={setNewTask}
              arrTask={arrTask}
              setArrTask={setArrTask}
              />
              
              <Search setSearchTask={setSearchTask} inputSearchAnim={inputSearchAnim} setInputSearchAnim={setInputSearchAnim}/>
              {filterTask.map((task) => {
                return <Task key={uuidv4()} task={task.title} id={task.id} complete={task.complete} arrTask={arrTask} setArrTask={setArrTask}  setNewTask={setNewTask}/>
              })}
            </div>
          </div>
        </div>
        
    </>
}

export default App;
