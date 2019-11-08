import React from 'react';
import InputTodo from '../containers/InputTodo';
import TodoController from '../containers/TodoController';
import ViewTodo from '../containers/ViewTodo';
import Header from './Header';
import Footer from './Footer';
import '../todo.css';


function App() {
  return (
    <div>
      <Header/>
      <div className="content">
        <h4>Organise it all with Todos!!</h4>
        <div className="container">
        {/* Component through which user is able to add the Todos */}
        <InputTodo/>
        {/* Component which renders the Todos based on the option selected */}
        <TodoController/>
        {/* Component handles the Todo views based on the status of the tasks */}
        <ViewTodo/> 
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
