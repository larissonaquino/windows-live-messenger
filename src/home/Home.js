import React, { useState, useEffect } from 'react'

import api from '../services/api'
import './Home.css'

function Home(data) {
    const [userName, setUserName] = useState('');
    const [subnick, setSubnick] = useState('');
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function getUsers() {
            await api.get('/users').then((usuarios) => {
                setUsers(usuarios.data)
                console.log('user', usuarios);
            })
            .catch(e => {
                console.error('Não foi possível se conectar ao servidor:', e)
            });
        }

        getUsers();
    }, []);

    function updateSubnick(description) {
        setSubnick(description);
        let email = 'larissonaquino@gmail.com'; // temp

        api.post('/updateSubnick', {
            email,
            subnick
        })
        .catch(e => {
            console.error('Não foi possível se conectar ao servidor:', e)
        });
    }

    return (
        <div className="App">
            <header>
                <div className="header">
                    <img src="https://avatars2.githubusercontent.com/u/29270648?s=400&u=33e774e5958640ad496d1ebf5a74e8204f2d54f6&v=4" alt="Eu"/>
                    <div className="signature">
                        <span className="user-name">Lárisson Aquino <span className="status-title">(Available)</span></span>
                        <input className="statusMessage" onBlur={e => updateSubnick(e.target.value)} />
                    </div>
                </div>
                <div className="search-session">
                    <input id="search-user" placeholder="Search user here" />
                </div>
            </header>
            <main>
                <div className="user-list">
                    { users.map(user => {
                        return (
                            <ul key={ user._id } className="user-data">
                                <li>
                                    <span className="user-list-name">{ user.name }</span>
                                    <span className="user-list-subnick">{ user.subnick ? ' - ' + user.subnick : '' }</span>
                                </li>
                            </ul>
                            )
                        }) 
                    }
                </div>
            </main>
        </div>
    )
}

export default Home;