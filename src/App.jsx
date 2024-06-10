import './App.css'
import React, { useState } from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])

  const toggleCompleted = (todoId) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    
    setTodos(updateTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId)
    setTodos(updatedTodos)
  }

  const addTodo = (todoTitle) =>{
    if (todoTitle === '') {
      return
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }
    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }

  console.log(todos)

  return (
    <div style={{textAlign: 'center', padding: '12px'}}>
      <h1 style={{fontSize: '34px'}}>My Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  )
}

export default App
