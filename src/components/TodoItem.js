import React from 'react'
import { AiFillCheckSquare } from "react-icons/ai"
import { RiDeleteBin7Fill } from "react-icons/ri"

export default function TodoItem(props) {
    const { todo, removeTodo, completeTodo } = props
    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
                <AiFillCheckSquare className="todo-icon" size={23}  style={{ marginRight: 10}} onClick={() => completeTodo(todo.id)}/>
                <RiDeleteBin7Fill className="todo-icon" size={23} style={{ marginRight: 2 }} onClick={() => removeTodo(todo.id)}/>
            </div>
        </div>
    )
}