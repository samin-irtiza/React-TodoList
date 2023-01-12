import React,{useState} from 'react'
import TodoForm from "./TodoForm"
import {SlClose} from "react-icons/sl"
import {TiEdit} from "react-icons/ti"

function Todo({todos, completeTodo, removeTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    })
    
  return todos.map((todo, index) => (
    <div className={todo.isComplete? 'todo-row-complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <SlClose className='remove-icon' onClick={()=> removeTodo(todo.id)} />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo