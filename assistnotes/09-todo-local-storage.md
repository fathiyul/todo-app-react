# Adding Local Storage to Todo App

To add local storage functionality to our Todo app, we'll need to modify our `App.js` file. We'll use the `useEffect` hook to handle loading and saving todos to local storage.

## Step 1: Import useEffect

At the top of your `App.js` file, modify the import statement to include `useEffect`:

```javascript
import React, { useState, useEffect } from 'react';
```

## Step 2: Load Todos from Local Storage

Add a `useEffect` hook to load todos from local storage when the component mounts:

```javascript
useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  if (storedTodos) setTodos(storedTodos);
}, []);
```

## Step 3: Save Todos to Local Storage

Add another `useEffect` hook to save todos to local storage whenever they change:

```javascript
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]);
```

## Full Updated App.js

Here's what your `App.js` should look like now:

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
