import React ,{Component} from 'react';
import {connect} from 'react-redux';
import { checkoutTodo,deleteTodo, editTodo,editOption } from '../actions';
import '../todo.css';


//Component renders Todos which are passed as props from TodoController
class TodoList extends Component{

   
    render(){
        let {todo,checkoutTodo,deleteTodo,editOption,editTodo} = this.props;
        return(
            <div>
                    {
                        todo.map((task)=>{
                            //Every todo is associated with checkbox for checking out the task to be completed
                            //and a delete button to delete the task.
                           return <div className="task" key={task.id}> 
                                    {
                                        (task.edit)
                                        ?
                                        (
                                            <form onSubmit={(e)=>{
                                                e.preventDefault();
                                                
                                                editTodo(task.id,this.refs.todoEdit.value);
                                               }}>
                                                <input className="edit" type="text" ref="todoEdit" defaultValue={task.todo} />
                                            </form>
                                        )
                                        :
                                    
                                    <label className="main" 
                                    style={{color:(task.status)? "rgb(126, 214, 25)" : "#3F81FA"}} onDoubleClick={()=>editOption(task.id)}>{task.todo}
                                    {/* Dispatches the checkout todo action */}
                                    <input type="checkbox" onClick={()=>checkoutTodo(task.id)} /> 
                                    <span className="geekmark"></span> 
                                    </label> 
                                  
                                    }
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
 deleteTodo,
 editOption,
 editTodo
}

export default connect (null,mapDispatchToProps)(TodoList);