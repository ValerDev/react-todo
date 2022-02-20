import React from "react";
import './formDetails.css'

export const Input = ({input, meta, placeholder = 'Input', type = 'text', id, style, autoComplete, autoFocus = false, ...props}) => {
    if(!id) return <p style={{color: 'crimson'}}>Error: `id` is required</p>
    const {error, touched} = meta
    return <div className='Input' style={style}>
        <input
            id={id}
            name={id}
            className={error && touched ? 'errorBorder' : ''}
            type={type}
            placeholder='&nbsp;'
            {...input}
            {...props}
            autoFocus={autoFocus}
            autoComplete={!autoComplete ? 'off' : true}
        />
        <label htmlFor={id}>{placeholder}</label>
        {(error && touched) && <p className='error'>{error}</p>}
    </div>
}

export const Textarea = ({input, meta, placeholder = 'Textarea', id, classname = '', style, autoComplete, autoFocus = false, ...props}) => {
    if(!id) return <p style={{color: 'crimson'}}>Error: `id` is required</p>
    const {error, touched} = meta
    return <div className='Textarea' style={style}>
        <textarea
            id={id}
            name={id}
            className={(error && touched) ? 'errorBorder' : ''}
            placeholder='&nbsp;'
            {...input}
            {...props}
            autoFocus={autoFocus}
            autoComplete={!autoComplete ? 'off' : true}
        />
        <label htmlFor={id}>{placeholder}</label>
        {(error && touched) && <p className='error'>{error}</p>}
    </div>
}

export const Checkbox = ({input, meta, title, id = 'checkbox', ...props}) => {
    if(!id) return <p style={{color: 'crimson'}}>Error: `id` is required</p>
    return <div className='Checkbox'>
        <input
            id={id}
            name={id}
            type='checkbox'
            {...input}
            {...props}
        />
        {title && <label htmlFor={id}>{title}</label>}
    </div>
}

export const Button = ({value = 'Button', ...props}) => {
    return <button className={'Button'} {...props}>{value}</button>
}