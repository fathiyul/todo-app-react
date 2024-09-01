import React from 'react';

function TodoItem({ todo, toggleCompleted, deleteTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <span onClick={toggleCompleted}>{todo.text}</span>
      <button onClick={deleteTodo}>Delete</button>
    </li>
  );
}

export default TodoItem;