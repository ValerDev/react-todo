import {
    ADD_TODO,
    REMOVE_TASK,
    TOGGLE_TASK_STATUS,
    TOGGLE_OPEN_STATUS,
    SAVE_OR_EDIT_TASK,
    CHANGE_TASK, SET_TODOS, IS_LOADING,
} from "../constants/constants";

export const addTodoAC = newTodo => ({
    type: ADD_TODO,
    payload: newTodo,
})

export const removeTaskAC = todos => ({
    type: REMOVE_TASK,
    payload: todos,
})

export const toggleTaskStatusAC = todos => ({
    type: TOGGLE_TASK_STATUS,
    payload: todos,
})

export const toggleTaskOpenAC = todos => ({
    type: TOGGLE_OPEN_STATUS,
    payload: todos,
})

export const saveOrEditTaskAC = todos => ({
    type: SAVE_OR_EDIT_TASK,
    payload: todos,
})

export const changeTaskAC = todos => ({
    type: CHANGE_TASK,
    payload: todos,
})

export const setTodosAC = todos => ({
    type: SET_TODOS,
    payload: todos,
})

export const setIsLoadingAC = isLoading => ({
    type: IS_LOADING,
    payload: isLoading,
})