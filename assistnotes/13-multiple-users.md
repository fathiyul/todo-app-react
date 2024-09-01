Adding user authentication to support multiple users is a great way to enhance your todo list application. We'll need to make several changes to implement this feature. I'll outline the steps and provide code snippets for the necessary modifications.

First, let's start by adding a simple login form and updating the App component to manage user authentication state.

```javascript
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import LoginForm from './LoginForm';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      const storedTodos = localStorage.getItem(`todos_${user.username}`);
      setTodos(storedTodos ? JSON.parse(storedTodos) : []);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`todos_${user.username}`, JSON.stringify(todos));
    }
  }, [todos, user]);

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

  const handleLogin = (username, password) => {
    // In a real app, you would validate credentials against a backend
    // For this example, we'll just set the user if a username is provided
    if (username.trim() !== '') {
      const newUser = { username };
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    }
  };

  const handleLogout = () => {
    setUser(null);
    setTodos([]);
    localStorage.removeItem('user');
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <p>Welcome, {user.username}! <button onClick={handleLogout}>Logout</button></p>
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

```

Now, let's create a new component for the login form:

```javascript
import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

```

Lastly, let's update the CSS to style the new login form and logout button:


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
  margin-bottom: 10px;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed span {
  text-decoration: line-through;
  color: #888;
}

li span {
  cursor: pointer;
}

li button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 3px;
  text-decoration: none;
}

li button:hover {
  background-color: #ff3333;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

form input {
  margin-bottom: 10px;
  width: 100%;
}

form button {
  width: 100%;
}

button[onClick="handleLogout"] {
  background-color: #f44336;
  margin-left: 10px;
}

button[onClick="handleLogout"]:hover {
  background-color: #d32f2f;
}

```

These changes implement a basic user authentication system for your todo list app. Here's a summary of what we've done:

1. Updated App.js to manage user state and handle login/logout.
2. Created a new LoginForm component for user authentication.
3. Modified the todo storage to be user-specific.
4. Updated the CSS to style the new login form and logout button.

To fully implement this in a production environment, you would need to:

1. Set up a backend server to handle user authentication securely.
2. Use proper password hashing and storage techniques.
3. Implement token-based authentication for API requests.
4. Add more robust error handling and validation.
