import React from 'react'
import TaskForm from './Task-Form'
import axios from 'axios'

const TaskEdit=(props)=>{
    const {id,title,status,handleToggle,editItem}=props
    const formSubmission=(formData)=>{
        axios.put(`http://localhost:3033/api/tasks/${id}`,formData)
        .then((response)=>{
            editItem(response.data)
        })
        .catch((err)=>{
            alert(err.message)
        })
       
        handleToggle()
        
    }
    return(
        <div>
            <TaskForm id={id} title={title} status={status} formSubmission={formSubmission} />
        </div>
    )
}
export default TaskEdit