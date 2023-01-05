import React, {userState} from 'react'

function TodoForm() {
const [input, setInput] = userState('')
  return (
    <form className='todo-form'>
        <input
        type='text'
        placeholder='Add a task'
        value={input}
        name='text'
        className='todo-input'
        />
        <button className='todo-button'> Add Task</button>
    </form>
  )
}

export default TodoForm