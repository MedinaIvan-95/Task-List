import React from 'react';
import "./AddTask.css";
import { v4 as uuidv4 } from 'uuid';

const AddTask = ({newTask,setNewTask,arrTask,setArrTask}) => {
    return<>
        <div className='addTask-container'>
            <input typeof="text" placeholder="Escribe una tarea por hacer ..." className="task_value" onChange={(e) => {
                    
                    setNewTask({
                        title:e.target.value,
                        id:uuidv4(),
                        complete:false
                    });
                }}/>
                <button onClick={() => {
                        setArrTask([...arrTask, newTask]);
                }}>Agregar</button>
        </div>
    </>
}

export default AddTask;