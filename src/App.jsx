import { useState } from 'react'
import './App.css'
import Header from './components/header'
import ToDoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      }
      setTodos([...todos, newTodo])
      setInputValue('')
    }
  }

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // Toggle completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ))
  }

  return (
    <div className="App">
      <Header />
      <div className="todo-container">
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new task..."
            className="todo-input"
          />
          <button onClick={addTodo} className="add-btn">
            Add Task
          </button>
        </div>
        <ToDoList 
          todos={todos}
          onDelete={deleteTodo}
          onToggleComplete={toggleComplete}
          onEdit={editTodo}
        />
      </div>
    </div>
  )
}

export default App