import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = op =>{
    const filteredTodos = [...todos].filter(todo=>todo.id!==op);
    setTodos(filteredTodos);
  };

  const updateTodo = (todoId, newText) => {
    if(!newText.text || /^\s*$/.test(newText.text)){
      return;
    }

    setTodos(prev => prev.map( todo => (todo.id===todoId? newText:todo)))
  };

  const completeTodo = op => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === op) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
    </div>
  )
}

export default TodoList