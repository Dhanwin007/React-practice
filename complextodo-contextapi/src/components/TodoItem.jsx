import React, { useState } from 'react'
import {useTodo} from '../contexts/index.js'

function TodoItem({todo}) {
  const [isTodoEditable,setIsTodoEditable] = useState(false);
  const [todoMsg,setTodoMsg] = useState(todo.todo);
  const {updateTodo, deleteTodo , toggleComplete} = useTodo();

  const editTodo = ()=>{
    updateTodo(todo.id,{...todo,todo:todoMsg})
    setIsTodoEditable(false);
  }

  const toggleCompleted = () =>{
    toggleComplete(todo.id);
  }



  
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black
    ${todo.completed ? "bg-[#c6e9a7]":"bg-[#ccbed7]"}`}>
    <input type="checkbox" 
    className='cursor-pointer'
    checked={todo.completed}
    onChange={toggleCompleted} />  
    <input type="text" 
    className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent" }`}
    value={todoMsg}
    readOnly={!isTodoEditable}
    onChange={(e)=> setTodoMsg(e.target.value)} />
  <button className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all inline-flex w-8 h-8
  text-sm boreder border-black/10 justify-center items-center shrink-0 disabled:opacity-50"
  onClick={()=>{
    if(todo.completed) return 
    if(isTodoEditable){
      editTodo()
    }else setIsTodoEditable((prev)=>!prev)
  }}
  disabled={todo.completed}>{isTodoEditable ?(
    /* Save Icon (Floppy Disk) */
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-600">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ) :(
    /* Edit Icon (Pencil) */
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-600">
      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
    </svg>
  )}</button>
  <button className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-100
  hover:bg-gray-100 shrink-0'
  onClick={()=>deleteTodo(todo.id)}>💀</button>
    </div>
  )
}

export default TodoItem