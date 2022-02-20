import './TodoList.css'
import TodoItem from "../../containers/TodoItem/TodoItem";

const TodoList = ({todos}) => {
    return (
        <div className="content">
            {
                todos.length ? todos.map(todo =>
                    <TodoItem item={todo} key={todo.id}/>) :
                <div className='empty'>There are no todos <div className='noData'/></div>
            }
        </div>
    )
}

export default TodoList;