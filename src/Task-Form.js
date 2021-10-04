import { useState } from "react"
import React from "react"
import { v4 as uuidv4 } from 'uuid'

const TaskForm=(props)=>{
    const {formSubmission,id:slNo,title:task,status:completed,isSaved,handleToggle}=props
    const [title,setTitle]=useState(task ? task :'')
    const [status,setStatus]=useState(completed ? completed : false)
    const [id,setId]=useState(slNo ? slNo : uuidv4())
    const handleTitle=(e)=>{
        setTitle(e.target.value)
    }
    const handleStatus=(e)=>{
        setStatus(e.target.checked)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            title:title,
            status:status
        }
        formSubmission(formData)
        if(isSaved){
            setTitle('')
        setStatus(false)
        setId(uuidv4())
        handleToggle()
        }

        
    }
    return (
        
        <div>
            <b>Add Task</b>
            <form onSubmit={handleSubmit}>
                <label>title</label><br/>
                <input type='text' value={title} onChange={handleTitle}/><br/>
                <label>completed</label>
                <input type='checkbox' checked={status} onChange={handleStatus}/><br/>
                <input type='submit' value='save'/>
            </form>
        </div>
    )
}
export default TaskForm