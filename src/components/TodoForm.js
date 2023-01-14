import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
const [input, setInput] = useState('');

const focusOnInput = useRef(null);

useEffect(() => {
  focusOnInput.current.focus();
})

const viewChange = e => {
  setInput(e.target.value)
};

const handleSubmit = e => {
  e.preventDefault();
  
  props.onSubmit({
    id: Math.floor(Math.random()*10000),
    text: input
  });
  setInput('');
};
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='Add a task'
        value={input}
        name='text'
        className='todo-input'
        onChange={viewChange}
        ref={focusOnInput}
        />
        <button className='todo-button'> Add Task</button>
    </form>
  )
}

export default TodoForm