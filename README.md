# React Todo App

A simple Todo list application built using React and the Context API. This app allows users to add, edit, delete, and toggle completion of tasks. It uses localStorage to persist data between page reloads.

## Features

- Add new todos  
- Edit existing todos  
- Delete todos  
- Toggle complete/incomplete status  
- Save todos in localStorage  
- Manage state globally with Context API  
- Built with functional components and React Hooks

## Folder Structure

src/  
├── components/  
│   ├── Form.js          - Form to add new todos  
│   └── TodoItem.js      - Individual todo component  
├── contexts/  
│   └── TodoContext.js   - React context for managing todos  
├── App.js               - Main app component  
└── index.js             - App entry point

## State Management

The app uses the Context API to provide todos and operations like addTodo, deleteTodo, updateTodo, and toggleTodo to all components without prop drilling.

Example:

<TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>

## Persistent Storage

Todos are automatically saved and retrieved from localStorage when the app loads and updates.

Example:

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"));
  if (todos && todos.length > 0) {
    setTodos(todos);
  }
}, []);

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

## Getting Started

1. Clone the repository

git clone https://github.com/hanoon-07/react-todo-app.git  
cd react-todo-app

2. Install dependencies

npm install

3. Start the development server

npm start

Then open http://localhost:3000 in your browser.

## Build for Production

To build the app for production:

npm run build

This creates an optimized production build in the build/ folder.

## Todo Format

Each todo object follows this structure:

{
  id: 1718677444241,
  todo: "Complete the project",
  completed: false
}

## License

This project is open source and available under the MIT License.

---

Made with ❤️ using React
