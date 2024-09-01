# Learning React: A Step-by-Step Guide

## Step 1: Set up your development environment

1. Open your terminal in Ubuntu.

2. Install Node.js and npm (Node Package Manager):
   ```
   sudo apt update
   sudo apt install nodejs npm
   ```

3. Verify the installation:
   ```
   node --version
   npm --version
   ```

4. Install create-react-app globally:
   ```
   sudo npm install -g create-react-app
   ```

## Step 2: Create a new React project

1. Choose a directory for your project and navigate to it:
   ```
   cd ~/Documents
   ```

2. Create a new React project:
   ```
   npx create-react-app my-first-react-app
   ```

3. Navigate into your project folder:
   ```
   cd my-first-react-app
   ```

## Step 3: Start the development server

1. Run the following command:
   ```
   npm start
   ```

2. Your default web browser should open automatically and display the default React app page.

## Step 4: Explore the project structure

Take a moment to look at the files and folders in your project. The most important ones are:

- `src/App.js`: The main component
- `src/index.js`: The entry point of your app
- `public/index.html`: The HTML template

## Step 5: Create a simple to-do list app

Let's modify the `App.js` file to create a basic to-do list:

1. Open `src/App.js` in your text editor.

2. Replace its contents with the following code:

```jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
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
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

3. Save the file and check your browser. You should see your new to-do list app!

## Step 6: Style your app

1. Open `src/App.css` and replace its contents with:

```css
.App {
  text-align: center;
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f1f1f1;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
}
```

2. Save the file and check your browser. Your app should now look more styled and user-friendly.

## Next steps

Congratulations! You've created your first React app. Here are some ideas to expand on this project:

1. Add a feature to mark tasks as completed
2. Implement task deletion
3. Add local storage to persist tasks after page reload
4. Create separate components for the task list and task items

Remember to consult the [React documentation](https://reactjs.org/docs/getting-started.html) for more in-depth information and advanced concepts.
