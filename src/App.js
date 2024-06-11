import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className="main">
      <div className="app-container">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  )
}

export default App