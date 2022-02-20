import React from "react";
import './Login.css'
import {Field, reduxForm} from "redux-form";
import {Button, Checkbox, Input} from "../common/formDetails/formDetails";
import {required, rangeLength} from "../../utils/validators/validators";

const rangeLengthLogin = rangeLength(6, 36)
const rangeLengthPassword = rangeLength(6, 16)
const LoginForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
                <Field name='login' id='login' type='text' placeholder='Login' component={Input} validate={[required, rangeLengthLogin]}/>
                <Field name='password' id='password' type="password" placeholder='Password' component={Input} validate={[required, rangeLengthPassword]}/>
                <Field name='rememberMe' title='Remember me' component={Checkbox}/>
                <Button value='Login' style={{width: '100%'}}/>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {

    const onSubmit = (loginData) => {
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