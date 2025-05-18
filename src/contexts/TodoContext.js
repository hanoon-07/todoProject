import { createContext, useContext } from "react"


const TodoContext = createContext({
    todos: {
        id: 1,
        todo: "",
        completed: false
    },

    addTodo : (todo) => {},
    deleteTodo : (id) => {},
    updateTodo : (id, todo) => {},
    toggleTodo : (id) => {}

})

export const useTodo = () => useContext(TodoContext)

export const TodoProvider = TodoContext.Provider


