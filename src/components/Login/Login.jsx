import React from "react";
import './Login.css'
import {Field, reduxForm, stopSubmit} from "redux-form";
import {Button, Checkbox, Input} from "../common/formDetails/formDetails";
import {required, rangeLength, email} from "../../utils/validators/validators";
import {useDispatch} from "react-redux";

const rangeLengthLogin = rangeLength(6, 36)
const rangeLengthPassword = rangeLength(6, 16)
const LoginForm = (props) => {
    const {handleSubmit, error} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name='email' id='email' type='text' placeholder='Email' component={Input}
                   validate={[required, rangeLengthLogin, email]}/>
            <Field name='password' id='password' type="password" placeholder='Password' component={Input}
                   validate={[required, rangeLengthPassword]}/>
            {error && <p className='authError'>{error}</p>}
            <Field name='rememberMe' title='Remember me' component={Checkbox}/>
            <Button value='Login' style={{width: '100%'}}/>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
    const dispatch = useDispatch()

    const onSubmit = (loginData) => {
        // TODO request for login
        dispatch(stopSubmit("login", {_error: 'Incorrect login or password'}))
        console.log(loginData)
    }

    return (
        <div className='loginForm'>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login
