import "./Task.css";
import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaMinusCircle } from "react-icons/fa";

const Task = ({task,id,complete,arrTask,setArrTask}) => {
    return <>
        <div className="new_task">
            <MdCancel className="cancel" onClick={() =>{
                setArrTask(arrTask.filter((element) => element.id !== id))
            }}    
            />
            <FaCheckCircle className="complete inactive" onClick={(e) => {
                e.target.classList.toggle("active");
                e.target.classList.add("inactive");
                
                console.log(e.target.classList)
            }}/>
            <FaMinusCircle className={`incomplete active`} onClick={(e) =>{
                
                    e.target.classList.toggle("active");
                    e.target.classList.add("inactive");
                
                console.log(e.target.classList)
            }}/>
            <p>{task}</p>
        </div>
    </>
}

export default Task;