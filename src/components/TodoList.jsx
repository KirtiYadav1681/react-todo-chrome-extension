import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  completedTodo,
  deleteTodo,
  editTodo,
  deleteAllTodos,
  deleteDoneTodos,
} from "../redux/action";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const handleEdit = (todo) => {
    setIsEditing(todo.key);
    setNewTodo(todo.todo);
  };

  const handleSave = (key) => {
    dispatch(editTodo(key, newTodo));
    setIsEditing(null);
    setNewTodo("");
  };

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      {todos.length > 0 ? (
        <div className="lists-wrapper">
          <ul>
            {todos.map((todo) => (
              <li key={todo.key}>
                <div className="title-icons-wrapper">
                  {isEditing === todo.key && todo.isComplete !== true ? (
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      onBlur={() => handleSave(todo.key)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSave(todo.key);
                      }}
                      autoFocus
                    />
                  ) : (
                    <p
                      style={{
                        textDecoration: todo.isComplete
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.todo}
                    </p>
                  )}
                  <div className="icons-wrapper">
                    <FaRegSquareCheck
                      color={todo.isComplete ? "green" : "red"}
                      onClick={() => dispatch(completedTodo(todo.key))}
                    />
                    <MdEdit color="orange" onClick={() => handleEdit(todo)} />
                    <MdDelete
                      color="red"
                      onClick={() => dispatch(deleteTodo(todo.key))}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="button-wrapper">
            <button onClick={() => dispatch(deleteAllTodos())}>
              Delete all tasks
            </button>
            <button onClick={() => dispatch(deleteDoneTodos())}>
              Delete done todos
            </button>
          </div>
        </div>
      ) : (
        <h3>Please add a todo...</h3>
      )}
    </div>
  );
};

export default TodoList;
