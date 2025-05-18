import React from 'react'
import { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function Form() {
    const [todoValue, setTodoValue] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        addTodo({todo:todoValue, completed:false})

    }

    return (

        <form onSubmit={add}>
            <input
                type="text"
                value={todoValue}
                onChange={(e) => { setTodoValue(e.target.value);}}
                className="border p-2"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>


    )
}

export default Form