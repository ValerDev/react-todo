import React from 'react'
import TodoItem from "../../components/TodoItem/TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {removeTask, changeTask, toggleStatus, toggleOpen, saveOrEditTask} from "../../redux/thunks/todos";

const TodoItemContainer = ({item}) => {

    const dispatch = useDispatch()
    const {todos} = useSelector(state => state.todosPage)

    return (
        <TodoItem toggleStatus={id => dispatch(toggleStatus(id, todos))}
                  removeTask={id => dispatch(removeTask(id, todos))}
                  toggleOpen={id => dispatch(toggleOpen(id, todos))}
                  saveOrEditTask={id => dispatch(saveOrEditTask(id, todos))}
                  changeTask={(newTask, id) => dispatch(changeTask(newTask, id, todos))}
                  item={item}
        />
    )
}

export default TodoItemContainer;