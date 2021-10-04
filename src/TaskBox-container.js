

import React,{useState,useEffect} from "react"
import TaskList from "./Task-List"
import AddTask from "./AddTask"
import axios from 'axios'

const TaskBoxContainer=(props)=>{
    const [tasks,setTasks]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3033/api/tasks')
        .then((response)=>{
            const result=response.data 
            setTasks(result) 
        },[])
        
    })
     const addTask=(formData)=>{
        const newTasks=[formData,...tasks]
        setTasks(newTasks)
    }
    const removeTask=(id)=>{
       const result=tasks.filter(ele=>{
           return ele.id!==id
       })
       setTasks(result)
    }
    const editItem=(formData)=>{
        const result=tasks.map(ele=>{
            if(formData.id===ele.id){
                return {...ele,...formData}
            }else{
                return {...ele}
            }
        })
    } 
    return (
        <div>
            TaskBox-Container
            <TaskList tasks={tasks} removeTask={removeTask} editItem={editItem} />
            <AddTask addTask={addTask} />
        </div>
    )
}
export default TaskBoxContainer