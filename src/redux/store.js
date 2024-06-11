import {createStore} from "redux";

const initialState = {todos: []}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEW_TODO":
            {
                const newTodo = {key: state.todos.length + 1, todo: action.payload, isComplete:false}
                return {...state, todos: [...state.todos, newTodo]}
            }
        case "COMPLETE_TODO":
            {
                const todos = state.todos.map((todo) =>
                    todo.key === action.payload
                      ? { ...todo, isComplete: !todo.isComplete }
                      : todo
                  );
                  return { ...state, todos };
            }
        case "EDIT_TODO":
            {
                const todos = state.todos.map((todo) =>
                    todo.key === action.payload.key
                      ? { ...todo, todo: action.payload.todo }
                      : todo
                  );
                  return { ...state, todos };
            }
        case "DELETE_TODO":
            {
                const todos = state.todos.filter((todo) =>  todo.key !== action.payload);
                return {...state, todos};
            }
        case "DELETE_ALL": return {...state, todos:[]};
        case "DELETE_COMPLETED_TODOS":
            {
                const todos = state.todos.filter((todo) => todo.isComplete !== true);
                return {...state, todos};
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;