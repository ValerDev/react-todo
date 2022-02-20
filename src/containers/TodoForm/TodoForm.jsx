import React from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import {useDispatch} from "react-redux";
import {reduxForm, reset} from "redux-form";
import {addNewTodo} from "../../redux/thunks/todos";


const TodoReduxForm = reduxForm({
    form: 'todo'
})(TodoForm)

const TodoFormContainer = () => {
    const dispatch = useDispatch()

    const onSubmit = formData => {
        console.log(formData)
        const {todo} = formData
        dispatch(addNewTodo(todo))
        dispatch(reset('todo'))
    }
    return (
        <TodoReduxForm onSubmit={onSubmit}/>
    )
}


export default TodoFormContainer;