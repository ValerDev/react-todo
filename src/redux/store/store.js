import {applyMiddleware, combineReducers, createStore} from "redux";
import {todosPage} from "../reducers/todosPage";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';

const reducers = combineReducers({
    todosPage,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.state = store;
export default store;

