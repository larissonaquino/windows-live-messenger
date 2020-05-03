import React from 'react'
import './Login.css';
import logo from '../resources/msn.png';

export default function Login() {
    return (
        <div className="App">
            <header className="AppHeader">
                <p>Sign in to <br /> Windows Live <b>Messenger</b></p>
            </header>
            <div className="form">
                <img src={logo} className="AppLogo" alt="Logo" />
                <div className="input">
                    <input id="email-input" placeholder="example555@hotmail.com" />
                    <input type="password" id="password-input" placeholder="Password" />
                    <span><a href="##"> Forgot your password?</a></span>
                    <span>Sign in as: Available</span>
                    <div>
                        <input type="checkbox" id="remember" name="remember" />
                        <label for="remember">Remember my ID and password</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sign-in-auto" name="remember" />
                        <label for="remember">Sign me in automatically</label>
                    </div>
                    <div className="submit-and-register">
                        <input type="submit" id="btn-sign-in" value="Sign in" />
                        <input type="submit" id="btn-cancel" value="Cancel" />
                    </div>
                </div>
            </div>
        </div>
    );
}
