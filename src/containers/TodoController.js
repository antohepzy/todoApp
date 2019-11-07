import React ,{Component} from 'react';
import {connect} from 'react-redux';
import TodoList from './TodoList';

// Component filters the Todos based on the selected option and passes as props to be rendered by TodoList
class TodoController extends Component{
    render(){
        let {option,todos} = this.props;
        return(
            <div className="listArea">
                <ul>
                    {
                        
                        (option === "all")
                        ?
                        // All the todos are sent to the TodoList Component
                         <TodoList todo = {todos} />
                        
                        :
                        (option === "pending")
                        ?
                        //Only todos where the status is false is sent to TodoList
                         <TodoList todo = {todos.filter(task=>!task.status)}/>
                        :
                        //Todos where the status is true is sent to TodoList
                         <TodoList todo = {todos.filter(task=>task.status)}/>
                    }
                
                </ul>
            </div>
        )
    }
    
}

//State is mapped to the props
const mapStateToProps =( state )=> state;


//Connects the state with the TodoController
export default connect (mapStateToProps)(TodoController);