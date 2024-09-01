# Understanding useState in React

## What is useState?

useState is a Hook in React that allows you to add state to functional components. Before Hooks were introduced, you could only use state in class components. useState provides a way to declare state variables and update them in functional components.

## Basic Syntax

```javascript
const [state, setState] = useState(initialValue);
```

This line does three things:
1. It declares a "state variable" named `state`.
2. It declares a function to update this state variable, named `setState`.
3. It sets the initial value of `state` to `initialValue`.

## How it Works

1. **Declaring State**: When you call useState, you're telling React that you want this component to remember something.

2. **Returning an Array**: useState returns an array with exactly two elements:
   - The first element is the current value of the state.
   - The second element is a function that lets you update the state.

3. **Array Destructuring**: We use array destructuring to give names to these two elements. You can name them whatever you want, but the convention is [something, setSomething].

## Example from Our To-Do App

Let's look at the two useState calls in our App.js:

```javascript
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');
```

### First useState:
- `todos` is our state variable, initially an empty array.
- `setTodos` is the function we'll use to update `todos`.

### Second useState:
- `input` is our state variable, initially an empty string.
- `setInput` is the function we'll use to update `input`.

## Using State

1. **Reading State**: You can use the state variable directly in your JSX or JavaScript logic:

   ```jsx
   {todos.map((todo, index) => (
     <li key={index}>{todo}</li>
   ))}
   ```

2. **Updating State**: You use the setState function to update the state:

   ```javascript
   setTodos([...todos, input]);
   setInput('');
   ```

   Note: When you call a setState function, React will re-render the component, reflecting the new state.

## Important Notes

1. **State Updates are Asynchronous**: React may batch multiple setState calls for performance reasons. This means you can't rely on the previous value of state to calculate the next value.

2. **Functional Updates**: If you need to update state based on the previous state, you should pass a function to setState:

   ```javascript
   setTodos(prevTodos => [...prevTodos, input]);
   ```

3. **Object State**: If your state is an object, remember to spread the previous state when updating:

   ```javascript
   setState(prevState => ({...prevState, newKey: newValue}));
   ```

4. **Multiple State Variables**: You can use useState multiple times in a single component for different pieces of state.

Understanding useState is crucial for building interactive React applications. It allows your components to remember and update information, enabling dynamic user interfaces.
