import React from 'react';
import { useEffect, useRef, useState } from 'react';
import "./toDo.css";

function TODO() {

    //State
    const [todos, setTodos] = useState([]);

    // Binding
    const todoText = useRef();

    // Side Effects / Lifecycle
    useEffect(() => {
        const existingTodos = localStorage.getItem('todos');
        setTodos(existingTodos ? JSON.parse(existingTodos) : []);
    }, []);

    // Events
    function addTodo(event) {
        event.preventDefault();
        const next = [...todos, todoText.current.value];
        setTodos(next);
        localStorage.setItem('todos', JSON.stringify(next));
    }

    return (
        <div className="form-container">


            <form className="form-line" onSubmit={addTodo}>
                <input ref={todoText} className="input-field"/>
                <input type="submit" value="Add Todo" className="input-field-btn"/>
            </form>
            <div>
                <ul>
                    {todos.map(todo => (<li key={todo}>{todo}</li>))}
                </ul>
            </div>

        </div>
    )
}

export default TODO;