import React , {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../todo.css';

class InputTodo extends Component {
   
    render(){
       let {addTodo} = this.props;
        return(
            <div>
                {/* Form submit dispatches the addTodo action which calls the reducer and adds the todo to the state */}
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    //The task which the user entered is passed to the action
                    addTodo(this.refs.task.value);
                    this.refs.task.value = ""; }}>
                
                {/* User Input Area to enter the task */}
                <input type="text" ref="task" className="textArea" placeholder="Add your Todos here!!"/>
                </form>
            </div>
        )
    }
    
}

//Exposes the addTodo action creator
const mapDispatchToProps = {
    addTodo
}

//Connects the dispatch function with the props and provides it to the InputTodo component
export default connect(null,mapDispatchToProps) (InputTodo);