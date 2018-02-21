import {ADD_TODO, DELETE_TODO, GET_ALL_TODOS, UPDATE_TODO} from "../actions/TodoActions";
import Todo from "../../Models/Todo";

const initialState = {todos: [new Todo('Buy Steak', 'Get steak from the grocery store', false, new Date(15, 4, 2018))]}

export const TodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state.todos, action.payload]
        case GET_ALL_TODOS:
            return state.todos
        case UPDATE_TODO:
            return state.todos.map(todo => (todo.id === action.payload.todo_id) ? action.payload.todo : todo)
        case DELETE_TODO:
            return state.todos.splice(state.todos.findIndex(iter => action.payload === iter), 1)
        default:
            return state.todos
    }
}