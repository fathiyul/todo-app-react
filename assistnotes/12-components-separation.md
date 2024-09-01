Separating components is a great way to improve the structure and maintainability of your React application. Let's break our app into three main components: App, TodoList, and TodoItem.

```javascript
// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [input, setInput] = useState('');

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
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

// TodoList.js
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

// TodoItem.js
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

```

Let's break down the changes and the structure of our new components:

1. **App.js**:
   - This is our main component that handles state management and core functions.
   - It renders the input field, add button, and the TodoList component.
   - We pass `todos`, `toggleCompleted`, and `deleteTodo` as props to TodoList.

2. **TodoList.js**:
   - This component is responsible for rendering the list of todos.
   - It receives `todos`, `toggleCompleted`, and `deleteTodo` as props from App.
   - It maps over the todos array and renders a TodoItem for each todo.
   - It passes the relevant props to each TodoItem.

3. **TodoItem.js**:
   - This component represents a single todo item.
   - It receives `todo`, `toggleCompleted`, and `deleteTodo` as props.
   - It handles the rendering of the todo text and delete button.
   - It applies the 'completed' class based on the todo's completed status.

Benefits of this component structure:

1. **Separation of Concerns**: Each component has a specific responsibility, making the code more organized and easier to understand.
2. **Reusability**: The TodoItem component can be easily reused if we need to display todos in different parts of our application.
3. **Maintainability**: If we need to change how a todo item is displayed, we only need to modify the TodoItem component.
4. **Performance**: React can more efficiently update the DOM when components are broken down like this.

To implement these changes:

1. Replace the content of your existing `App.js` with the new version provided.
2. Create two new files in your `src` directory: `TodoList.js` and `TodoItem.js`.
3. Copy the respective code into these new files.

Your file structure should now look like this:

```
src/
  App.js
  TodoList.js
  TodoItem.js
  App.css
```

This structure maintains all the functionality we've implemented while improving the organization of our code.