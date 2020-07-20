import React, { useState } from 'react'

import api from '../services/api'
import './Login.css';
import logo from '../resources/msn.png';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function signInClick(e) {
        e.preventDefault();

        const response = await api.post('/authenticate', {
            email,
            password
        })
        .catch(e => {
            console.log('erro ao tentar autenticar-se', e)
        })
        
        if (response) {
            // navigate to initial page here
        }
    }
    
    function cancelClick(e) {
        e.preventDefault();
    }
    
    return (
        <div className="App">
            <header className="AppHeader">
                <p>Sign in to <br /> Windows Live <b>Messenger</b></p>
            </header>
            <form className="form">
                <img src={logo} className="AppLogo" alt="Logo" />
                <div className="input">
                    <input id="email-input" placeholder="example555@hotmail.com" required onChange={e => setEmail(e.target.value)} value={email} />
                    <input type="password" id="password-input" placeholder="password" required onChange={e => setPassword(e.target.value)} value={password} />
                    <span><a href="##">Forgot your password?</a></span>
                    <span>Sign in as:
                        <span className="status"></span>
                        <select className="select-status">
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

export default Login;