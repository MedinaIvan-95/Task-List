import React from 'react';
import "./AddTask.css";
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({newTask,setNewTask,arrTask,setArrTask}) => {
    return<>
        <input typeof="text" placeholder="Escribe una tarea por hacer ..." className="task_value" onChange={(e) => {
            
            setNewTask({
                title:e.target.value,
                id:uuidv4(),
                complete:false,
                incomplete:true
            });
        }}/>
        <button onClick={() => {
                setArrTask([...arrTask, newTask]);
        }}>Agregar</button>
    </>
}

export default AddTask;