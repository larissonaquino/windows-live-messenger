import React, { useState } from 'react'

import api from '../services/api'
import './Home.css'

function Home(userData) {
    const [userName, setUserName] = useState('');
    const [subnick, setSubnick] = useState('');
    const [users, setUsers] = useState([]);

    api.get('/users').then((usuarios) => {
        setUsers(usuarios.data)
        console.log('user', usuarios);
    });

    function updateSubnick(description) {
        setSubnick(description);
        let email = 'larissonaquino@gmail.com'; // temp

        api.post('/updateSubnick', {
            email,
            subnick
        });
    }

    return (
        <div className="App">
            <header>
                <div className="header">
                    <img src="https://avatars2.githubusercontent.com/u/29270648?s=400&u=33e774e5958640ad496d1ebf5a74e8204f2d54f6&v=4" alt="Eu"/>
                    <div className="signature">
                        <span className="user-name">Lárisson Aquino <span className="status-title">(Available)</span></span>
                        <span className="statusMessage">If you can see my heart, then you already know I'm falling apart</span>
                    </div>
                </div>
                <div className="search-session">
                    <input id="search-user" placeholder="Describe your subnick here" onBlur={e => updateSubnick(e.target.value)}></input>
                </div>
            </header>
            <main>
                <div className="user-list">
                    <div display="block">
                        <span className="user-list-name">Lárisson</span>
                        <span className="user-list-subnick">- {subnick}</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;