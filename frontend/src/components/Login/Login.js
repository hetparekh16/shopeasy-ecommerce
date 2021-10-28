import React from 'react'
import './Login.css'
import crossIcon from '../../img/icons/close.png'
const Login = (props) => {
    const handleSignIn = () => {
        document.querySelector('#modalContainer').classList.remove('right-panel-active')
        console.log('Yes Sign In');
    }
    const handleSignUp = () => {
        document.querySelector('#modalContainer').classList.add('right-panel-active')
        console.log('Yes Sign Up');
    }
    const handleCloseButton = () => {
        props.setShowModal(false)
    }
    return (
        <>
            {
                props.showModal ? <>

                    <div className="modalBackground">
                        <div className="modalContainer" id="modalContainer">
                            <img src={crossIcon} alt="" className='close-button' onClick={handleCloseButton} />
                            <div className="form-container sign-up-container">
                                <form action="#">
                                    <h1 className="title">Create Account</h1>
                                    <span>or use your email for registration</span>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button>Sign Up</button>
                                </form>
                            </div>
                            <div className="form-container sign-in-container">
                                <form action="#">
                                    <h1>Sign in</h1>
                                    <span>or use your account</span>
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <a href="/">Forgot your password?</a>
                                    <button>Sign In</button>
                                </form>
                            </div>
                            <div className="overlay-container">
                                <div className="overlay">
                                    <div className="overlay-panel overlay-left">
                                        <h1>Welcome Back!</h1>
                                        <p>To keep connected with us please login with your personal info</p>
                                        <button className="ghost" id="signIn" onClick={handleSignIn}>Sign In</button>
                                    </div>
                                    <div className="overlay-panel overlay-right">
                                        <h1>Hello, Friend!</h1>
                                        <p>Enter your personal details and start journey with us</p>
                                        <button className="ghost" id="signUp" onClick={handleSignUp}>Sign Up</button>
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
