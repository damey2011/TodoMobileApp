export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const GET_ALL_TODOS = 'GET_ALL_TODOS'
export const GET_DONE_TODOS = 'GET_DONE_TODOS'
export const GET_PENDING_TODOS = 'GET_PENDING_TODOS'

export const AddTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const DeleteTodo = (todo_id) => {
    return {
        type: DELETE_TODO,
        payload: todo_id
    }
}

export const UpdateTodo = (todo_id, todo) => {
    return {
        type: UPDATE_TODO,
        payload: {todo_id, todo}
    }
}

export const GetAllTodos = () => {
    return {
        type: GET_ALL_TODOS,
    }
}