import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo, todosSelector } from "../app/todosSlice";
import './todo.css';

export function Todo() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();
    const todos = useSelector(todosSelector);

    const handleAddTodo = (e) => {
        if(text.length >= 1) {
            dispatch(addTodo(text))
            setText('')
        }
    }

    return (
        <div className="App-header">
            <div>
                <input 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                /> {" "}
                <button
                    onClick={handleAddTodo}
                >Add todo</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                        >
                            {todo.text} {" "}
                            <button onClick={(e) => dispatch(toggleTodo(todo.id))}>{todo.completed ? 'marked incomplete' : 'marked complete'}</button> {" "}
                            <button onClick={(e) => dispatch(deleteTodo(todo.id))}>Delete task</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};