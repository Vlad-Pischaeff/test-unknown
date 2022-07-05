import React, { useState } from 'react';
import API from '../api';

const FormSignup = ({ setHaveAccount }) => {
    const [ auth, setAuth ] = useState({"gender": "male", "photo": "http://localhost:5000/upload/icons8-person-64.png"});

    const changeValue = e => {
        let obj = { ...auth, [e.target.name]:e.target.value };
        setAuth(obj);
    }

    const addUser = e => {
        e.preventDefault();
        API.put('api/users/register', { ...auth })
            .then(res => alert(`User ${res.data.login} successfully created...`))
    }

    return (
        <main>
            <form className="login" onSubmit={addUser} >
                <div className="login_header">
                    Sign Up
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
                    <input  className="login_input" 
                            type="email" 
                            name="email"
                            placeholder="email" 
                            required 
                            onChange={changeValue} />
                    <input  className="login_input" 
                            type="date" 
                            name="date"
                            placeholder="birthday" 
                            required 
                            onChange={changeValue} />
                    <fieldset>
                        <legend>your gender</legend>
                        <div className="field-radio">
                            <input  type="radio" 
                                    id="male" 
                                    name="gender" 
                                    value="male" 
                                    checked={auth.gender === "male" ? true : false}  
                                    onChange={changeValue} />
                            <label htmlFor="male">Man</label><br/>
                        </div>
                        <div className="field-radio">
                            <input  type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female"
                                    checked={auth.gender === "female" ? true : false} 
                                    onChange={changeValue} />
                            <label htmlFor="female">Woman</label>
                        </div>
                    </fieldset>
                </div>
                <input  className="login_button" 
                        type="submit" 
                        value="Sign Up" />
                <input  className="login_button-sign" 
                        type="button" 
                        value="Already have account?" 
                        onClick={() => setHaveAccount(true)} />
            </form>
        </main>
    );
};

export default FormSignup;