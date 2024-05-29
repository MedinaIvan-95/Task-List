import "./Task.css";
import React from 'react';
/* import { FaCheckCircle } from "react-icons/fa"; */
import { MdCancel } from "react-icons/md";
/* import { FaMinusCircle } from "react-icons/fa"; */
/* import { v4 as uuidv4 } from 'uuid'; */
import { TbPointFilled } from "react-icons/tb";

const Task = ({task,id,complete,arrTask,setArrTask}) => {
    return <>
        <div className="new_task">
            <MdCancel className="cancel"  onClick={() =>{
                setArrTask(arrTask.filter((element) => element.id !== id))
            }}    
            />

            <TbPointFilled className={ complete === false ? "incomplete" : "complete"} onClick={() => {
            
                const completeIndex = arrTask.findIndex( element => element.id === id);
                const switchCompleteTask = arrTask[completeIndex]
                
                if(switchCompleteTask.complete === false){
                    //La siguiente linea se usa para modificar un valor de una propiedad del objeto dentro de un array 
                    setArrTask([...arrTask], switchCompleteTask.complete = true);
                }else{
                    setArrTask([...arrTask], switchCompleteTask.complete = false);
                }
            }} />

            <p>{task}</p>
        </div>
    </>
}

export default Task;