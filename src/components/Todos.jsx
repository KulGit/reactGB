import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { useState } from "react";
import { useEffect } from "react";
import { loadTodos } from "../redux/todosReducer/todosReducer";
import { getTodos } from "../redux/todosReducer/todosSelector";

const Todos = () => {

    // const [todos, setTodos] = useState([])
    const todos = useSelector(getTodos);
    const dispatch = useDispatch();


    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(data => setTodos(data))
        // .catch((e) => console.log(e.toString()))
        dispatch(loadTodos());
    }, [])
    return (
        <div>
            {todos.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>
                </div>
            ))}

        </div>

    )

}
export default Todos;