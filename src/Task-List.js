import React from 'react'
import TaskItem from './TaskItem'

const TaskList =(props)=>{
    const {tasks,removeTask,editItem}=props
    
    return (
        <div>
            {
               tasks.length==0 ? (
                   <div>
                       <b>NO task found</b> <br/>
                       <b>Add your first Task</b>
                   </div>
               ):(
                  <div>
                       <b>My tasks-{tasks.length}</b>
                       {
                           tasks.map(ele=>{
                            return <TaskItem key={ele.id} id={ele.id} title={ele.title} status={ele.status} removeTask={removeTask} editItem={editItem} />
                           })
                       }
                  </div>
                   
               )
            }
        </div>
    )
}    
export default TaskList