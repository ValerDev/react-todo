import {
    ADD_TODO,
    REMOVE_TASK,
    TOGGLE_TASK_STATUS,
    TOGGLE_OPEN_STATUS,
    SAVE_OR_EDIT_TASK,
    CHANGE_TASK,
    SET_TODOS,
    IS_LOADING,
} from "../constants/constants";

const initialState = {
    todos: [],
    isLoading: false,
}

export const todosPage = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            }
        case REMOVE_TASK:
            return {
                ...state,
                todos: action.payload,
            }
        case TOGGLE_TASK_STATUS:
            return {
                ...state,
                todos: action.payload,
            }
        case TOGGLE_OPEN_STATUS:
            return {
                ...state,
                todos: action.payload,
            }
        case SAVE_OR_EDIT_TASK:
            return {
                ...state,
                todos: action.payload,
            }
        case CHANGE_TASK:
            return {
                ...state,
                todos: action.payload
            }
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload.map((e, i) => ({
                        task: e.title,
                        completed: e.completed,
                        id: ++i,
                        open: false,
                        edit: false,
                        date: `${new Date(new Date(2012, 0, 1).getTime() + Math.random() * ( new Date().getTime() - new Date(2012, 0, 1).getTime()))}`,
                    })
                )
            }
        case IS_LOADING:
            return{
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}



