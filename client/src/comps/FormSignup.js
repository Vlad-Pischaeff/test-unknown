import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from "./FormLayout";
import * as UI from './customUI';
import API from '../api';

const FormSignup = ({ setHaveAccount }) => {
    const { user, setUser } = useUser();
    let navigate = useNavigate();

    const changeValue = e => {
        let obj = { ...user, [e.target.name]:e.target.value };
        setUser(obj);
    }

    const addUser = e => {
        e.preventDefault();
        API.put('api/users/register', { ...user })
            .then(res => {
                setUser(res.data);
                navigate("/account", { replace: true });
            })
            .catch(e => alert(`Error - ${e.response.data.message}`))
    }

    return (
        <main>
            <form className="login" onSubmit={addUser} >
                <UI.FormHeader title="Sign Up" />
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
                                    checked={user.gender === "male" ? true : false}  
                                    onChange={changeValue} />
                            <label htmlFor="male">Man</label><br/>
                        </div>
                        <div className="field-radio">
                            <input  type="radio" 
                                    id="female" 
                                    name="gender" 
                                    value="female"
                                    checked={user.gender === "female" ? true : false} 
                                    onChange={changeValue} />
                            <label htmlFor="female">Woman</label>
                        </div>
                    </fieldset>
                </div>
                <UI.SubmitButton value="Sign Up" />
                <input  className="login_button-sign" 
                        type="button" 
                        value="Already have account?" 
                        onClick={() => setHaveAccount(true)} />
            </form>
        </main>
    );
};

export default FormSignup;