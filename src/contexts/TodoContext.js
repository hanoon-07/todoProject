import { createContext, useContext } from "react"


const TodoContext = createContext({
    todos: [],

    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    toggleTodo : (id) => {}

})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider


