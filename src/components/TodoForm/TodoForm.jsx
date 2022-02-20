import React from "react";
import './TodoForm.css';
import {Field} from "redux-form";
import {required} from "../../utils/validators/validators";
import {Button, Input} from "../common/formDetails/formDetails";

const TodoForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit} className='todoForm'>
            <Field
                type="text"
                id={'addTodoInput'}
                name="todo"
                placeholder='Write task here..'
                component={Input}
                validate={[required]}
                style={{width: '80%'}}
            />
            <Button value='Add' style={{width: '15%'}}/>
        </form>
    )
}

export default TodoForm;