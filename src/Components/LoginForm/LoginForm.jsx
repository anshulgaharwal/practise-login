import React, { useState } from 'react'
import './LoginForm.css'

import email_icon from '../Assets/email.png'
import google_icon from '../Assets/google.png'
import person_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

const LoginForm = () => {

    const [action, setAction] = useState("Sign Up");

    return(      
        <div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Sign In" ? <></> : <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" />
                    </div>}
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
                    <div className={action === "Sign In" ? "sub gray" : "sub"} onClick={() => setAction("Sign Up")}>Sign Up</div>
                    <div className={action === "Sign Up" ? "sub gray" : "sub"} onClick={() => setAction("Sign In")}>Sign In</div>
                </div>
                <div className="google">
                    <img src={google_icon} alt="" />
                    <div className="google-text">Sign In with Google</div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm