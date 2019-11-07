import React , {Component} from 'react';
import { connect } from 'react-redux';
import { todoOptions,deleteCompleted } from '../actions';
import '../todo.css';

class ViewTodo extends Component {
    //Function to count the number of todos which are not checked out
    taskCount = () =>{
        let count = 0;
       (this.props.todos).map(todo =>{
           
            if(!todo.status){
                count++;
            }
        })
        return count;
    }

    render(){
        let {todoOptions,deleteCompleted,todos} = this.props;
        return(
            <div className="footer">
                <h3>{this.taskCount()} left</h3>
                {/* Dispatch todoOption to show all todos */}
                <button className="option" onClick={()=>todoOptions("all")}>Show All</button>
                {/* Dispatch todoOption to show completed todos  */}
                <button className="option" onClick={()=>todoOptions("completed")}>Completed</button>
                {/* Dispatch todoOption to show pending todos */}
                <button className="option" onClick={()=>todoOptions("pending")}>Pending</button> 
                {
                    //Clear Completed option is visible if there are completed todos
                    todos.find(todo=>todo.status)
                    ?
                    //Dispatch deleCompleted action to delete all completed tasks
                    <button className="option" onClick={deleteCompleted}>Clear Completed</button>
                    :
                    null
                }  
            </div>
        )

    }
}

//State and actions are mapped to props
const mapStateToProps = state => state;

const mapDispatchToProps = {
    todoOptions,
    deleteCompleted
}

export default connect(mapStateToProps,mapDispatchToProps) (ViewTodo);