import React , {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo,checkOutAll } from '../actions';
import '../todo.css';

class InputTodo extends Component {
   
    render(){
       let {addTodo,checkOutAll,flag,todos} = this.props;
        return(
            <div>
                {/* Form submit dispatches the addTodo action which calls the reducer and adds the todo to the state */}
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    //The task which the user entered is passed to the action
                    addTodo(this.refs.task.value);
                    this.refs.task.value = ""; }}>
                
                {/* User Input Area to enter the task */}
                <div  className="textArea" >
                    {
                        (todos.length>0)
                        ?
                        
                        <button type="reset"  className="arrow" onClick={()=>checkOutAll(flag)}><span className="down"></span>
                        </button>
                        :
                        null
                    }
               
                <input type="text" ref="task" className= "inputText" placeholder="What needs to be done?"/>
                </div>
                </form>
            </div>
        )
    }
    
}

const mapStateToProps = state => state

//Exposes the addTodo action creator
const mapDispatchToProps = {
    addTodo,
    checkOutAll
}

//Connects the dispatch function with the props and provides it to the InputTodo component
export default connect(mapStateToProps,mapDispatchToProps) (InputTodo);