import TodoList from "../../components/TodoList/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getTodos} from "../../redux/thunks/todos";

import Loader from "../../components/Loader/Loader";

const TodoListContainer = () => {
    const {todos, isLoading} = useSelector(state => state.todosPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return (
        isLoading ? <Loader/> : <TodoList todos={todos}/>
    )
}

export default TodoListContainer;