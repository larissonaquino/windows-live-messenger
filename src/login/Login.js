import React, { useState } from 'react'
import './Login.css';
import logo from '../resources/msn.png';


export default function Login() {
    const [status, setStatus] = useState('available')

    function signInClick(e) {
        e.preventDefault();
    }
    
    function cancelClick(e) {
        e.preventDefault();
    }    
    
    function selectOnChange(e) {
        let status = e.target.value
    
        if (status === 'available')
            setStatus('available')
        else if (status === 'occupied')
            setStatus('occupied')
        else if (status === 'invisible')
            setStatus('invisible')
    }

    return (
        <div className="App">
            <header className="AppHeader">
                <p>Sign in to <br /> Windows Live <b>Messenger</b></p>
            </header>
            <form className="form">
                <img src={logo} className="AppLogo" alt="Logo" />
                <div className="input">
                    <input id="email-input" placeholder="example555@hotmail.com" required />
                    <input type="password" id="password-input" placeholder="password" required />
                    <span><a href="##">Forgot your password?</a></span>
                    <span>Sign in as: &nbsp;
                        <span className="status"></span>
                        <select onChange={selectOnChange}>
                            <option value="available" defaultValue>Available</option>
                            <option value="occupied">Occupied</option>
                            <option value="invisible">Invisible</option>
                        </select>
                    </span>
                    <div>
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember my ID and password</label>
                    </div>
                    <div>
                        <input type="checkbox" id="sign-in-auto" name="sign-in-auto" />
                        <label htmlFor="sign-in-auto">Sign me in automatically</label>
                    </div>
                    <div className="submit-and-register">
                        <button type="submit" id="btn-sign-in" onClick={signInClick}>Sign in</button>
                        <button type="submit" id="btn-cancel" onClick={cancelClick}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

