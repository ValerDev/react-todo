import React from "react";
import TodoFormContainer from "../../containers/TodoForm/TodoForm"
import TodoListContainer from "../../containers/TodoList/TodoList"
import './Home.css'

function Home() {

    return (
        <div className="Home">
            <TodoFormContainer/>
            <TodoListContainer/>
        </div>
    )
}

export default Home
