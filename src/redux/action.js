// action to add a new todo
export const addNewTodo = (newTodo) => {
    return {type: "NEW_TODO", payload:newTodo}
}

// action to mark a todo complete
export const completedTodo = (todoKey) => {
    return {type: "COMPLETE_TODO", payload:todoKey}
}

// action to edit a todo
export const editTodo = (todoKey, updatedTodo) => {
    return {type: "EDIT_TODO", payload: {key:todoKey, todo: updatedTodo}}
}

// action to delete a todo
export const deleteTodo = (todoKey) => {
    return {type: "DELETE_TODO", payload:todoKey}
}

// action to delete all todos
export const deleteAllTodos = () => {
    return {type: "DELETE_ALL"}
}

// action to delete completed todos
export const deleteDoneTodos = () => {
    return {type: "DELETE_COMPLETED_TODOS"}
}