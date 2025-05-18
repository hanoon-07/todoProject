import { useEffect, useState } from 'react'
import Form from './components/Form'
import TodoItem from './components/TodoItem'
import { TodoProvider } from './contexts/TodoContext'


function App() {


  const [todos, setTodos] = useState([])

  const addTodo = (todo) => setTodos(prev => [{ id: Date.now(), ...todo }, ...prev])



  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter(x => x.id !== id)) // try to check without using prev

  const updateTodo = (id, todo) =>
    setTodos(prev => prev.map(x => x.id === id ? todo : x))

  const toggleTodo = (id) =>
    setTodos(todos.map(x => x.id === id ? { ...x, completed: !x.completed } : x))


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])






  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, toggleTodo }}>

      <div className='flex justify-center w-full bg-red-100'>
        <Form />
      </div>

      {
        todos.map(
          (todo) =>

          (<div key={todo.id}>
            <TodoItem todo={todo} />
          </div>)
        )
      }

    </TodoProvider>
  )

}

export default App
