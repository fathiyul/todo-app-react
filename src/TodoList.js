import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, toggleCompleted, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleCompleted={() => toggleCompleted(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;