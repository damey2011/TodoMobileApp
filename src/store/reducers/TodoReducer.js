import {ADD_TODO, DELETE_TODO, GET_ALL_TODOS, UPDATE_TODO} from "../actions/TodoActions";
import Todo from "../../Models/Todo";

const initialState = [new Todo('Cucumber', 'Body of Cucumber', false, new Date(2018, 2, 23))]

export const TodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload]
        case GET_ALL_TODOS:
            return state
        case UPDATE_TODO:
            return state.map(todo => (todo.id === action.payload.id) ? action.payload : todo)
        case DELETE_TODO:
            return state.filter(todo => todo !== action.payload)
        default:
            return state
    }
}