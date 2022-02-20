import React from 'react'
import './TodoItem.css'
import {Button} from "../common/formDetails/formDetails";


const TodoItem = (props) => {

    const {item: {id, completed, task, open, edit, date}, removeTask, toggleStatus, toggleOpen, saveOrEditTask, changeTask} = props;

    const checkedStyle = {
        boxShadow: 'rgb(0 117 255) 0px 0px 3px 0px',
    }
    const checkedStyleText = {
        textDecoration: 'line-through'
    }

    return (
        <div className={open || edit ? 'TodoItem TodoItemOpened' : 'TodoItem'}
             style={completed ? checkedStyle : {}}
        >

            <textarea className={edit ? 'areaForEditing' : 'areaForEditing areaForEditingClosed'}
                      onChange={(e) => changeTask(e.target.value, id)} value={task}/>


            {edit ? '' : <span className={open || edit ? 'task openedTask' : 'task'}
                               style={completed ? checkedStyleText : {}}>{task}</span>}

            <span className='date'><i>{date.substring(0, 25)}</i></span>
            <div className='tools'>

                <Button className={edit ? 'editItem' : 'saveItem'}
                        onClick={() => saveOrEditTask(id)}
                        value={edit ? '🖫' : '✎'}
                />
                <Button className='deleteItem'
                        onClick={() => removeTask(id)}
                        value='✖'
                />
                <Button className='toggleItem'
                        onClick={() => toggleStatus(id)}
                        style={completed ? {color: '#0075ff'} : {}}
                        value='✔'
                />
                {
                    task.length >= 86 || edit ?
                        <button className='openBtn' onClick={() => toggleOpen(id)}> {open || edit ? 'close' : 'open'}
                            <span
                                className={open || edit ? 'openIcon' : 'closeIcon'}>⌵</span></button> : ''
                }
            </div>
        </div>
    )
}

export default TodoItem;