# Implementing Task Deletion in the Todo App

## Step 1: Add a Delete Function

First, let's add a function to delete a todo item. In your `App.js`, add the following function:

```javascript
const deleteTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
```

This function creates a new array excluding the todo at the specified index.

## Step 2: Add a Delete Button

Next, let's add a delete button to each todo item. Update the JSX in your render method:

```jsx
<ul>
  {todos.map((todo, index) => (
    <li key={index} className={todo.completed ? 'completed' : ''}>
      <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </li>
  ))}
</ul>
```

## Step 3: Style the Delete Button

Let's add some CSS to style our delete button. In your `App.css`, add:

```css
li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
}

li button:hover {
  background-color: #ff3333;
}
```

## Full Updated App.js

Here's what your `App.js` should look like now:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={addTodo}>Add Task</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? 'completed' : ''}>
            <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

These changes will add a delete button next to each todo item, allowing users to remove tasks from the list.
