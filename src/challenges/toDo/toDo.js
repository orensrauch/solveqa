import React from 'react';
import { useEffect, useRef, useState } from 'react';

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
        <div>


            <form onSubmit={addTodo}>
                <input ref={todoText} />
                <input type="submit" value="Add Todo" />
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