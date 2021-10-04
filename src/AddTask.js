import axios from 'axios'
import React,{useState} from 'react'
import TaskForm from './Task-Form'

const AddTask=(props)=>{
    const [isSaved,setSaved]=useState(false)
    const {addTask}=props
    const formSubmission=(formData)=>{
        axios.post('http://localhost:3033/api/tasks',formData)
        .then((response)=>{
            addTask(response.data)
            setSaved(true)
        })
        .catch((err)=>{
            alert(err.message)
        })
        
        
    }
    const handleToggle=()=>{
        setSaved(false)
    }
    return (
        <div>
           <TaskForm formSubmission={formSubmission} isSaved={isSaved} handleToggle={handleToggle}/> 
            
        </div>
    )
}
export default AddTask