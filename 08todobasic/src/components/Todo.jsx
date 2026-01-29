import React, { useState,useEffect,useId } from 'react'

function Todo() {
    const[tasks,setTasks]=useState(()=>{
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const[newTodo,setTodo]=useState("");
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    const addTask=()=>{
        setTasks((prev)=>([...prev,{task:newTodo,id:Date.now().toString(),status:false}]))
    }
    const delItem=(delindex)=>{
        setTasks((prev)=>{
            return prev.filter((task)=>task.id!=delindex)
        })
    }
    const markDone=(id)=>{
        setTasks((prev)=>{
            return prev.map((task)=>{
                if(task.id===id)
                {
                    return {...task,status:!task.status}
                }
                return task;
            })
        })
    }

  return (
    <div>
    <input placeholder='add a task' value={newTodo} onChange={(e)=>setTodo(e.target.value)}/>
    <button type="submit" onClick={addTask}>add</button>
    <h4>Tasks to</h4>
    <ul>
                {/* 3. This displays your array on the screen */}
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span style={task.status ? { textDecoration: 'line-through',backgroundColor:'green' } : {}}>
        {task.task}
    </span>
    <button onClick={() => markDone(task.id)}>Done</button>
                    <button onClick={()=>delItem(task.id)}>Delete</button></li>
                    
                ))}
            </ul>
    </div>
  )
}

export default Todo