import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';

const API_URL = 'http://localhost:8000';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const fetchTodos = useCallback(async () => {
    if (user) {
      try {
        const response = await axios.get(`${API_URL}/todos/${user.id}`);
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
  }, [user]);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchTodos();
    }
  }, [user, fetchTodos]);

  const addTodo = async () => {
    if (input.trim() !== '') {
      try {
        const response = await axios.post(`${API_URL}/todos/${user.id}`, {
          text: input,
          completed: false
        });
        setTodos([...todos, response.data]);
        setInput('');
      } catch (error) {
        console.error('Error adding todo:', error);
      }
    }
  };

  const toggleCompleted = async (todo) => {
    try {
      const response = await axios.put(`${API_URL}/todos/${todo.id}`, {
        ...todo,
        completed: !todo.completed
      });
      const newTodos = todos.map(t => t.id === todo.id ? response.data : t);
      setTodos(newTodos);
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);
      const newTodos = todos.filter(t => t.id !== id);
      setTodos(newTodos);
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/users/login`, { username, password });
      const newUser = response.data;
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleSignup = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/users/`, { username, password });
      const newUser = response.data;
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Username may already be taken.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setTodos([]);
    localStorage.removeItem('user');
  };

  if (!user) {
    return showSignup ? (
      <SignupForm onSignup={handleSignup} onSwitchToLogin={() => setShowSignup(false)} />
    ) : (
      <LoginForm onLogin={handleLogin} onSwitchToSignup={() => setShowSignup(true)} />
    );
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <div className="user-info">
        <span>Welcome, {user.username}!</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); addTodo(); }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <TodoList todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;