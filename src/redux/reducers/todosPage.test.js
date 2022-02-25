import {todosPage} from './todosPage'
import {addTodoAC, removeTaskAC} from "../actions/addTodo";
import {removeTask} from "../thunks/todos";

it('Should add new task', () => {
    const state = {
        todos: [
            {
                "task": "test",
                "id": "1",
                "completed": false,
                "open": false,
                "edit": false,
                "date": "Wed Feb 23 2022 23:44:32 GMT+0400 (Armenia Standard Time)"
            },
        ]
    }
    const newTask = {
        "task": "new todo",
        "id": "2",
        "completed": true,
        "open": true,
        "edit": false,
        "date": "Wed Feb 23 2022 23:44:32 GMT+0400 (Armenia Standard Time)"
    };
    const newState = todosPage(state, addTodoAC(newTask));
    expect(newState.todos.length).toBe(2);
    const newTaskFromState = newState.todos.find(task => task.id === newTask.id)
    expect(newTaskFromState).toBe(newTask);
})

it('Should remove task', () => {
    const state = {
        todos: [
            {
                "task": "test",
                "id": "1",
                "completed": false,
                "open": false,
                "edit": false,
                "date": "Wed Feb 23 2022 23:44:32 GMT+0400 (Armenia Standard Time)"
            },
            {
                "task": "new todo",
                "id": "2",
                "completed": true,
                "open": true,
                "edit": false,
                "date": "Wed Feb 23 2022 23:44:32 GMT+0400 (Armenia Standard Time)"
            },
        ]
    }
    const dispatch = jest.fn()
    const newTodos = removeTask('1', state.todos)(dispatch)
    expect(dispatch).toHaveBeenCalledWith(removeTaskAC(newTodos));
    const removedTask = newTodos.find(task => task.id === '1')
    expect(removedTask).toBe(undefined)
})






