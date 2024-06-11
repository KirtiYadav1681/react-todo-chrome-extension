import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addNewTodo} from '../redux/action';

const TodoInput = () => {
    const [todoInput, setTodoInput] = useState("");
    const dispatch = useDispatch();

  return (
    <div className='wrapper'>
        <h1>TodoInput</h1>
        <div className='input-container'>
            <input type="text" placeholder="New Todo" onChange={(e) => setTodoInput(e.target.value)} />
            <button onClick={() => dispatch(addNewTodo(todoInput))}>Add new task</button>
        </div>
    </div>
  )
}

export default TodoInput