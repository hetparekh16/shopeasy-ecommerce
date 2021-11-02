import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import crossIcon from '../../img/icons/close.png'
import { authenticateSignUp, authenticateLogIn } from '../../service/api'
const Login = (props) => {
    const signupinitialvalues = {
        name: "",
        username: "",
        email: "",
        password: "",
        phone: "",
    }

    const loginInitionValues = {
        username: "",
        password: "",
    }

    const [signup, setSignup] = useState(signupinitialvalues)
    const [login, setLogin] = useState(loginInitionValues)
    const [error, setError] = useState(false)
    const handleSignIn = () => {
        document.querySelector('#modalContainer').classList.remove('right-panel-active')
        // console.log('Yes Sign In');
    }
    const handleSignUp = () => {
        document.querySelector('#modalContainer').classList.add('right-panel-active')
        // console.log('Yes Sign Up');
    }
    const handleCloseButton = () => {
        props.setShowModal(false)
    }
    const signUpApiCall = async (e) => {
        e.preventDefault()
        let response = await authenticateSignUp(signup)
        if (!response) return;
        props.setAccount(signup.username)
        handleCloseButton()
    }
    const loginApiCall = async (e) => {
        e.preventDefault()
        let response = await authenticateLogIn(login)
        if (!response) {
            setError(true);
            return
        };
        props.setAccount(login.username)
        handleCloseButton()
    }


    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value })
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }
    return (
        <>
            {
                props.showModal ? <>

                    <div className="modalBackground">
                        <div className="modalContainer" id="modalContainer">
                            <img src={crossIcon} alt="" className='close-button' onClick={handleCloseButton} />
                            <div className="form-container sign-up-container">
                                <form className="modalForm" action="#">
                                    <h1 className="title">Create Account</h1>
                                    <input onChange={(e) => onInputChange(e)} className="input-modal" name="name" type="text" placeholder="Full Name" />
                                    <input onChange={(e) => onInputChange(e)} className="input-modal" name="username" type="text" placeholder="Username" />
                                    <input onChange={(e) => onInputChange(e)} className="input-modal" name="email" type="email" placeholder="Email" />
                                    <input onChange={(e) => onInputChange(e)} className="input-modal" name="password" type="password" placeholder="Password" />
                                    <input onChange={(e) => onInputChange(e)} className="input-modal" name="phone" type="number" placeholder="Phone Number" />
                                    <button className="modalButton" onClick={(e) => signUpApiCall(e)}>Sign Up</button>
                                </form>
                            </div>
                            <div className="form-container sign-in-container">
                                <form className="modalForm" action="#">
                                    <h1 className="title">Sign in</h1>
                                    <span className="spanText">or use your account</span>
                                    <input onChange={(e) => onValueChange(e)} className="input-modal" name="username" type="name" placeholder="username" />
                                    <input onChange={(e) => onValueChange(e)} className="input-modal" name="password" type="password" placeholder="Password" />
                                    {
                                        error && <p className="error-text"> Invalid Credentials </p>
                                    }
                                    <Link to="/" className="anchorText">Forgot your password?</Link>
                                    <button className="modalButton" onClick={(e) => loginApiCall(e)}>Sign In</button>
                                </form>
                            </div>
                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1 className="title">Welcome Back!</h1>
                                        <p className="paraText">To keep connected with us please login with your personal info</p>
                                        <button className="ghost modalButton" id="signIn" onClick={handleSignIn}>Sign In</button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1 className="title">Hello, Friend!</h1>
                                        <p className="paraText">Enter your personal details and start journey with us</p>
                                        <button className="ghost modalButton" id="signUp" onClick={handleSignUp}>Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : null
            }
        </>
    )
}

export default Login
