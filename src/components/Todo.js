import React, { useState } from "react";
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
    const [isEditing, setEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setEditing(false);
    };


    return ( <
        TransitionGroup className = { completed ? "Todo completed" : "Todo" } > {
            isEditing ? ( <
                CSSTransition key = "setEditing"
                timeout = { 500 }
                className = "form" >
                <
                form className = "Todo-edit-form"
                onSubmit = { handleUpdate } >
                <
                input type = "text"
                name = "task"
                value = { editTask }
                onChange = {
                    (e) => setEditTask(e.target.value) }
                /> <
                button > Save < /button> <
                /form> <
                /CSSTransition>
            ) : ( <
                CSSTransition key = "normal"
                timeout = { 500 }
                classNames = "task-text" >
                <
                li className = "Todo-task"
                onclick = { toggleTodo } > { task } <
                /li> <
                /CSSTransition>
            )
        }

        <
        div className = "Todo-buttons" >
        <
        button onClick = {
            () => setEditing(true) } >
        <
        li className = "fas fa-trash" / >
        <
        /button> <
        button onClick = { removeTodo } >
        <
        li className = "fas fa-trash" / >
        <
        /button> <
        /div> <
        /TransitionGroup>
    );
};

export default Todo;