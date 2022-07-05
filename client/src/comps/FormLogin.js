import React, { useState } from 'react';
import API from '../api';

const FormLogin = ({ setHaveAccount }) => {
    const [ user, setUser ] = useState({});

    const changeValue = e => {
        let obj = { ...user, [e.target.name]:e.target.value };
        setUser(obj);
    }

    const submitUser = e => {
        e.preventDefault();
        API.post('api/users/login', { ...user })
            .then(res => alert(`User ${res.data.login} successfully authorized...`))
            .catch(e => alert(`Error - ${e.response.data.message}`))
    }

    return (
        <main>
            <form className="login" onSubmit={submitUser}>
                <div className="login_header">
                    Login
                </div>
                <div className="login_body">
                    <input  className="login_input" 
                            type="text" 
                            name="login"
                            placeholder="login" 
                            required 
                            onChange={changeValue} />
                    <input  className="login_input" 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            required
                            onChange={changeValue} />
                </div>
                <div className="login_photo">
                    <img src="http://localhost:5000/upload/icons8-person-64.png" />
                </div>
                <input  className="login_button" 
                        type="submit" 
                        value="Login" />
                <input  className="login_button-sign" 
                        type="button" 
                        value="Don't have an account yet?" 
                        onClick={() => setHaveAccount(false)} />
            </form>
        </main>
    );
};

export default FormLogin;