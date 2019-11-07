import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { checkoutTodo,deleteTodo } from '../actions';
import '../todo.css';

//Component renders Todos which are passed as props from TodoController
class TodoList extends Component{
    render(){
        let {todo,checkoutTodo,deleteTodo} = this.props;
        return(
            <div>
                    {
                        todo.map((task)=>{
                            //Every todo is associated with checkbox for checking out the task to be completed
                            //and a delete button to delete the task.
                           return <div className="task"> 
                                    <label className="main" 
                                    style={{color:(task.status)? "#75F900" : "white"}}>{task.todo}
                                    {/* Dispatches the checkout todo action */}
                                    <input type="checkbox" onClick={()=>checkoutTodo(task.id)} /> 
                                    <span className="geekmark"></span> 
                                    </label> 
                                    {/* Dispatches the deleteTodo action */}
                                    <button className="clear" onClick={()=>deleteTodo(task.id)}>X</button>
                                  </div>
                        })
                    }
              
            </div>
        )
    }
    
}

//Checkout todo and deleteTodo are available as props through mapDispatchToProps
const mapDispatchToProps = {
 checkoutTodo,
 deleteTodo
}

export default connect (null,mapDispatchToProps)(TodoList);