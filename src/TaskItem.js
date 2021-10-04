import React,{useState} from 'react'
import TaskEdit from './TaskEdit'
import axios from 'axios'

const TaskItem = (props)=>{
    const {id,title,status,removeTask,editItem}=props
    const [toggle,setToggle]=useState(false)
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    const handleRemove=()=>{
       const confirm= window.confirm('are you sure?')
       if(confirm){
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
        .then((response)=>{
            const data=response.data
            console.log(data)
        })
       }
    }
    return (
       <div>
           {
               toggle ? (
                  <div>
                       <TaskEdit id={id} title={title} status={status} handleToggle={handleToggle} editItem={editItem}/>
                       <button onClick={handleToggle}>Cancel</button>
                  </div>
               ):(
                   <div>
                       {
                           status ? (
                            <blockquote style={{backgroundColor:'green'}}>{title}</blockquote>
                           ):(
                            <blockquote style={{backgroundColor:'orange'}}>{title}</blockquote>
                           )
                       }
                       <button onClick={handleToggle}>Edit</button>
                       <button onClick={ handleRemove}>Remove</button>
                   </div>
               )
           }
       </div>
    )
}
export default TaskItem