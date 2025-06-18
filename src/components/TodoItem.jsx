import React, { useEffect, useState } from 'react'
import { useTodo } from '../contexts/TodoContext'




function TodoItem({ todo }) {

    const { updateTodo, deleteTodo, toggleTodo } = useTodo()

    const [isTodoEditable, setIsTodoEditable] = useState(false)

    const [mark, setMark] = useState(todo.completed)

    const [todoValue, setTodoValue] = useState(todo.todo)

    




    return (
        <div className='flex justify-center mt-10'>
            <input
                type="text"
                value=
                {todoValue}                                                                             /*when just value is given without onChange it will just remain that even if readOnly is false and we try to edit it */

                onChange={(e) => { setTodoValue(e.target.value) }}
                readOnly={!isTodoEditable}

                className={`${isTodoEditable
                        ? 'border border-gray-300 cursor-text px-2 py-1 rounded '
                        : 'border-none cursor-default focus:outline-none '
                    }` + `${mark ? 'line-through' : ''}`}
            />

               <button className="bg-green-500 text-white px-2 py-1 mr-1 rounded"
                onClick={(e) => {
                    setMark(prev => !prev)
                    toggleTodo(todo.id)
                    
                }}

            >
                {mark ? "unmark" : "mark"}
            </button>

            <button className="bg-blue-500 text-white px-2 py-1 mr-1 rounded"
                onClick={
                    (e) => {
                        setIsTodoEditable(!isTodoEditable);
                        updateTodo(todo.id, { ...todo, todo: todoValue })
                    }
                }
            >
                {isTodoEditable ? "save" : "edit"}
            </button>

         

            <button className="bg-red-500 text-white px-2 py-1  rounded"
                onClick={(e) => deleteTodo(todo.id)}
            // remember callback is passed and not direct call
            >
                delete
            </button>


        </div>
    )
}

export default TodoItem