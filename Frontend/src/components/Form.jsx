import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Register from './Auth/Register';
import Login from './Auth/Login';
import LoginImg from "../assets/LoginImg.png";
import './Styles/Form.css'

const Form = ({ setUser }) => {
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className='formPage'>
            <div className='welcome'>
                <div className='roboWelcomeCon'>
                    <div className='roboCircle'>
                        <img src={LoginImg} alt="robot photo" />
                    </div>
                    <p className='welcomePara1'>Welcome aboard my friend</p>
                    <p className='welcomePara2'>just a couple of clicks and we start</p>
                </div>
            </div>
            {showRegister ? (
                <Register setShowRegister={setShowRegister} />
            ) : (
                <Login setShowRegister={setShowRegister} setUser={setUser} />
            )}
            <ToastContainer />
        </div>
    )
}

export default Form;