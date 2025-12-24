import React from 'react'
import './LoginForm.css'

import email_icon from '../Assets/email.png'
import google_icon from '../Assets/google.png'
import person_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const LoginForm = () => {
    return(
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" />
                    </div>
                    <div className="input">
                        <img src={email_icon} alt="" />
                        <input type="email" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" />
                    </div>
                </div>
                <div className="submit">
                    <div className="sub">Sign In</div>
                    <div className="sub">Sign Up</div>
                </div>
                <div className="google">
                    <div className="google-button">
                        <img src={google_icon} alt="" />
                        <div className="google-text">Sign In with Google</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm