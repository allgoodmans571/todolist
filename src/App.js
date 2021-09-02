import React from 'react';
import './App.css';
import './index.css'
import TodoList from './components/TodoList';
import Context from './components/context';


function App() {

 


  const [todos, setTodos ] = React.useState(
    [
    {id: 1, completed: false, title: 'Buy lorem' },
    {id: 2, completed: false, title: 'Buy ipsum' },
    {id: 3, completed: false, title: 'Buy dolor' },
    ]
  )

  // let todos = [
  //   {id: 1, completed: false, title: 'Buy lorem' },
  //   {id: 2, completed: false, title: 'Buy ipsum' },
  //   {id: 3, completed: false, title: 'Buy dolor' },
  // ]
  function toggleTodo(id) { 
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo 
    }))
    
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id))
    
  }

  return (
    <Context.Provider value={{ removeTodo }} >
    <div className="wrapper">
      <h1>To-do List</h1>
      <TodoList todos={todos } onToggle={toggleTodo} /> 
    </div>
    </Context.Provider>
  );
}

export default App;
