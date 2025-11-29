import React, { useState } from 'react'

const ToDoItem = ({ todo, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, editText)
    }
    setIsEditing(!isEditing)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="checkbox"
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="edit-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      
      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleEdit} className="save-btn">Save</button>
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
          </>
        ) : (
          <>
            <button onClick={handleEdit} className="edit-btn">Edit</button>
            <button onClick={() => onDelete(todo.id)} className="delete-btn">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default ToDoItem