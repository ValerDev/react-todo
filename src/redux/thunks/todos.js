import {
    addTodoAC,
    changeTaskAC,
    removeTaskAC, saveOrEditTaskAC,
    setIsLoadingAC,
    setTodosAC,
    toggleTaskOpenAC,
    toggleTaskStatusAC
} from "../actions/addTodo";
import {fetchTodos} from "../../api/todosApi";

export const getTodos = () => async dispatch => {
    dispatch(setIsLoadingAC(true))
    const data = await fetchTodos()
    dispatch(setTodosAC(data))
    dispatch(setIsLoadingAC(false))
}

export const addNewTodo = (todo) => dispatch => {
    dispatch(addTodoAC({
        task: todo,
        id: (Date.now() + todo).slice(0, 16),
        completed: false,
        open: false,
        edit: false,
        date: `${new Date()}`,
    }))
}

export const removeTask = (id, todos) => dispatch => {
    dispatch(removeTaskAC(todos.filter(todo => todo.id !== id)))
}

export const changeTask = (newTask, id, todos) => dispatch => {
    dispatch(changeTaskAC(
        todos.map(todo => {
            if (todo.id === id) {
                todo.task = newTask
                return todo
            }
            return todo
        })))
}

export const toggleStatus = (id, todos) => dispatch => {
    dispatch(toggleTaskStatusAC(
        todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
                return todo
            }
            return todo
        })))
}

export const toggleOpen = (id, todos) => dispatch => {
    dispatch(toggleTaskOpenAC(
        todos.map(todo => {
            if (todo.id === id) {
                if (todo.open) todo.edit = false
                todo.open = !todo.open
                return todo
            }
            return todo
        })))
}

export const saveOrEditTask = (id, todos) => dispatch => {
    dispatch(saveOrEditTaskAC(
        todos.map(todo => {
            if (todo.id === id) {
                todo.edit = !todo.edit
                return todo
            }
            return todo
        })))
}
