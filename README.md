# React Todo List Application

This is me learning React concepts by building simple todo-app by help of Claude 3.5 Sonnet, which is documented in the `assistnotes/` folder for anyone to replicate.

## Description

This is a simple, yet functional Todo List application built with React. It allows users to add, delete, and mark tasks as completed. The application uses local storage to persist tasks, ensuring that your todos remain saved even after closing the browser.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Persist tasks using local storage
- Responsive design

## Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage API

## Project Structure

```
src/
  ├── App.js
  ├── TodoList.js
  ├── TodoItem.js
  ├── App.css
  └── index.js
```

- `App.js`: Main component that handles state and core functions
- `TodoList.js`: Component for rendering the list of todos
- `TodoItem.js`: Component for rendering individual todo items
- `App.css`: Styles for the application

## Setup and Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the project directory in your terminal.
4. Run `npm install` to install the required dependencies.
5. Run `npm start` to start the development server.
6. Open your browser and visit `http://localhost:3000` to view the application.

## Usage

- To add a new task, type your task in the input field and click the "Add Task" button or press Enter.
- To mark a task as completed, click on the task text. Click again to mark it as uncompleted.
- To delete a task, click the "Delete" button next to the task.

## Future Enhancements

- Add due dates for tasks
- Implement task categories or tags
- Implement drag and drop for task reordering

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).