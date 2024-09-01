# Adding a 'Mark as Completed' Feature to the Todo App

## Step 1: Modify the Todo Data Structure

First, we need to change our todo items from simple strings to objects that include a 'completed' status.

In your `App.js`, modify the `useState` for todos:

```javascript
const [todos, setTodos] = useState([]);
```

And update the `addTodo` function:

```javascript
const addTodo = () => {
  if (input.trim() !== '') {
    setTodos([...todos, { text: input, completed: false }]);
    setInput('');
  }
};
```

## Step 2: Add a Toggle Completed Function

Add a new function to toggle the completed status of a todo:

```javascript
const toggleCompleted = (index) => {
  const newTodos = [...todos];
  newTodos[index].completed = !newTodos[index].completed;
  setTodos(newTodos);
};
```

## Step 3: Update the Render Method

Modify the JSX to render the new todo structure and add a way to toggle completion:

```jsx
<ul>
  {todos.map((todo, index) => (
    <li key={index} className={todo.completed ? 'completed' : ''}>
      <span onClick={() => toggleCompleted(index)}>{todo.text}</span>
    </li>
  ))}
</ul>
```

## Step 4: Update the CSS

In your `App.css`, add styles for completed todos:

```css
.completed {
  text-decoration: line-through;
  color: #888;
}

li span {
  cursor: pointer;
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

These changes will allow users to click on a todo item to toggle its completed status. Completed items will have a line through them and appear in a lighter color.
