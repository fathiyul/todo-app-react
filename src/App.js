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
      <div className="user-info">
        <span>Welcome, {user.username}!</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
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