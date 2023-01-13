import React,{useState} from 'react'
import TodoForm from "./TodoForm"
import {SlClose} from "react-icons/sl"
import {TiEdit} from "react-icons/ti"

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
      updateTodo(edit.id, value);
      setEdit({
        id:null,
        text:''
      });
    }

    if (edit.id) {
      
      return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    
  return todos.map((todo, index) => (
    <div className={todo.isComplete? 'todo-row-complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <SlClose className='remove-icon' onClick={()=> removeTodo(todo.id)} />
        <TiEdit className='edit-icon' onClick={()=>setEdit({id:todo.id, text:todo.text})}/>
      </div>
    </div>
  ));
}

export default Todo