import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUser } from "./FormLayout";
import * as UI from './customUI';
import API from '../api';

const FormLogin = ({ setHaveAccount }) => {
    const { user, setUser } = useUser();
    let navigate = useNavigate();

    const changeValue = e => {
        let obj = { ...user, [e.target.name]:e.target.value };
        setUser(obj);
    }

    const submitUser = async e => {
        e.preventDefault();
        const response = await API.userLogin(user);
        if (response) {
            setUser(response);
            navigate("/account", { replace: true });
        }
    }

    return (
        <main>
            <form className="login" onSubmit={submitUser}>
                <UI.FormHeader title="Login" />
                <div className="login_body">
                    <UI.Input text name="login" ph="login" onChange={changeValue} />
                    <UI.Input password name="password" ph="password" onChange={changeValue} />
                </div>
                <div className="login_photo">
                    <img src={user.photo} alt="user_photo" />
                </div>
                <UI.SubmitButton value="Login" />
                <input  className="login_button-sign" 
                        type="button" 
                        value="Don't have an account yet?" 
                        onClick={() => setHaveAccount(false)} />
            </form>
        </main>
    );
}

export default FormLogin;