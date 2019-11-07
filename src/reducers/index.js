import { ADD_TODO,
         CHECKOUT_TODO,
         DELETE_TODO,
         TODO_OPTIONS,
         DELETE_TODOS } from '../actions';

// Initializing default state
const defaultState = {
    todos:[],
    option:"all"
}

//Reducer function for the various action types
export default (state = defaultState , action) =>{
    switch(action.type){
        //Add todo, the task is added in the state associated with a autoincrement id and status.
        case ADD_TODO:
            return{
                ...state,
                todos:[...state.todos,{id:action.payload.id,
                                        todo:action.payload.todo,
                                        status:false}]
            }
        
        //The status of the selected task is changed to either true or false based on the user selection.
        case CHECKOUT_TODO:
            let chckOut = state.todos.map(todo=>{
                if(todo.id === action.payload)
                {
                        return Object.assign({}, todo , {
                        status: !todo.status
                    })
                }
                return todo;
            })
        // The state is returned to update in the store.
            return {
                ...state,
                todos:chckOut
            }
        
        //Selected Todo is deleted and removed from the todo list in the state.
        case DELETE_TODO:
                    let delTask = state.todos.filter(todo=> todo.id !== action.payload)
                    return {
                        ...state,
                        todos:delTask
                    }
        
        //Todo options are set to either view all tasks or view completed task or view pending based on the user selection.
        case TODO_OPTIONS:
                return{
                    ...state,
                    option:action.payload
                }
        
        //All the completed todos are deleted from the todo list and the state is changed.
        case DELETE_TODOS:
             let delTasks = state.todos.filter(todo=> !todo.status)
                 return {
                   ...state,
                   todos:delTasks
                }
        //default case if none of the options match
        default:
            return state
    }

}
