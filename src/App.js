import React from "react"
import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from "./components/Home/Home"
import Login from "./components/Login/Login";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
                {/*<Route path="*" element={<Navigate to="/login" />}/>*/}
            </Routes>
        </div>
    );
}

export default App;
