import React, {useEffect, useState} from "react";
import './TodoComponentStyle.css'
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import CalendarComponent from "./CalendarComponent";
import {nanoid} from "nanoid";
import Swal from "sweetalert2";
import Logo from "../visual-material/logo.png";

function TodoComponent() {

    // To do list initial state
    const [todos, setTodos] = useState([
        {
            id: nanoid(),
            text: "Buy groceries",
            completed: false,
            important: false
        },
        {
            id: nanoid(),
            text: "Go to gym",
            completed: false,
            important: false
        },
    ]);

    // Retrieve to do list when page loads
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('react-todo-app-data-male'));

        if (savedTodos){
            setTodos(savedTodos);
        }
    },[]);

    // Save todos to local storage
    useEffect(() => {
        localStorage.setItem(
            'react-todo-app-data-male',
            JSON.stringify(todos))
    }, [todos]);

    // Add to do function
    const addTodo = (text) => {
        const newTodo = {
            id: nanoid(),
            text: text,
            completed: false,
            important: true
        }

        if (newTodo.text === "") {
            Swal.fire(
                {customClass:{
                        popup: 'reset-container-ok',
                        title: 'reset-title-ok',
                        confirmButton: 'reset-ok'
                    },
                    title: "You can't add an empty to do!"
                });
        }
        else {
            const newTodos = [...todos, newTodo]; // new array with old to-dos and new to-do
            setTodos(newTodos);
        }

    };

    // Delete to do function
    const removeTodo = (id) => {
        Swal.fire({
            customClass: {
                popup: 'remove-container',
                title: 'remove-title',
                confirmButton: 'remove-confirm',
                cancelButton: 'remove-cancel',
            },
            title: 'Are you sure that you want to delete this to-do?',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            showLoaderOnConfirm: true}
        ).then((result) => {
            if (result.isConfirmed) {
                    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
                    setTodos(updatedTodos);
            }
        });

    };

    // Mark a to-do as done function
    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    // Important to dos are the to-dos that the user adds
    let sortedTodos = todos.sort((a, b) => b.important - a.important)


    return (
        <div className="out">
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <div className="outer-container">
                <div className="left-content">
                    <div className="todo">
                        <h1 className="txt">TO-DO LIST</h1>
                        <p className="txt-second">Tip: Once you have made the list of all the things you need to do,
                        it's much easier to prioritize tasks on it.</p>
                        <TodoForm
                            todos={todos}
                            addTodo={addTodo}
                        />
                        <div className="sorted">
                            {sortedTodos.map((todo) => {
                                return (
                                    <TodoItem removeTodo={removeTodo} completeTodo={completeTodo} todo={todo} key={todo.id}/>
                                )
                            })}
                        </div>

                    </div>
                </div>
                <div className="text"><h1>The most effective way to do it is to do it! With flow's to-do
                list you can easily break down your big goals into items, and items into tasks.</h1></div>
            </div>
            <div className="nothing"><br/><br/>
                <br/><br/><br/>
            </div>
            <br/><br/><br/><br/><br/>
            <div className="outer-container">
                <div className="text"><h1>Busy schedule? Don't let it control you. Time to maximize your time! Stay one step
                    ahead of your priorities and track your daily life with ease.</h1></div>
                <div className="right-content"><CalendarComponent></CalendarComponent></div>
            </div>
            <br/><br/>
        </div>
    );
}

export default TodoComponent;