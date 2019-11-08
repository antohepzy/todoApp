//action type for the TODOs
export const ADD_TODO = "ADD_TODO";
export const CHECKOUT_TODO = "CHECKOUT_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TODO_OPTIONS = "TODO_OPTIONS";
export const DELETE_TODOS = "DELETE_TODOS";
export const EDIT_OPTION = "EDIT_OPTION";
export const EDIT_TODO = "EDIT_TODO";

//initializing TODO ID
let todo_ID = 0;

//action creator for adding a TODO
export const addTodo = (todo) => {
    return{
        type: ADD_TODO,
        payload: { id:todo_ID++,
                   todo }
    }
}

//action creator to check out Task based on the task id
export const checkoutTodo = (id) =>{
    return{
        type: CHECKOUT_TODO,
        payload:id
    }
}

//action creator to delete the selected Task
export const deleteTodo = (id) =>{
    return{
        type: DELETE_TODO,
        payload:id
    }
}

//action creator toggle edit of the selected Task
export const editOption = (id) =>{
    return{
        type: EDIT_OPTION,
        payload:id
    }
}

//action creator to edit the task
export const editTodo = (id,text) =>{
    return{
        type: EDIT_TODO,
        payload:{id,text}
    }
}

//action creator to view Task based on the options view all, completed and pending.
export const todoOptions = (option) =>{
    return{
        type: TODO_OPTIONS,
        payload:option
    }
}

//action creator to delete all the tasks which are completed.
export const deleteCompleted = () =>{
    return{
        type:DELETE_TODOS,
        payload:null
    }
}