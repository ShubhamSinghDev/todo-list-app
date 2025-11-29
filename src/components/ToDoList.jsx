import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos, onDelete, onToggleComplete, onEdit }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No tasks yet. Add a new task to get started!</p>
      ) : (
        todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
            onEdit={onEdit}
          />
        ))
      )}
    </div>
  )
}

export default ToDoList