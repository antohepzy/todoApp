import React from 'react';
import InputTodo from './containers/InputTodo';
import TodoController from './containers/TodoController';
import ViewTodo from './containers/ViewTodo';
import './todo.css';


function App() {
  return (
    <div className="container">
      {/* Component through which user is able to add the Todos */}
     <InputTodo/>
      {/* Component which renders the Todos based on the option selected */}
     <TodoController/>
     {/* Component handles the Todo views based on the status of the tasks */}
     <ViewTodo/> 
    </div>
  );
}

export default App;
