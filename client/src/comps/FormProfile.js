import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from "./FormLayout";
import { FormImageUpload } from './FormImageUpload';
import * as UI from './customUI';
import API from '../api';

export const FormProfile = () => {
    const { user, setUser } = useUser();
    const [ image, setImage ] = useState(null);
    const inputRef = useRef();

    const changeValue = e => {
        let obj = { ...user, [e.target.name]:e.target.value };
        setUser(obj);
    }

    const updateProfile = async e => {
        e.preventDefault();
        const response = await API.updateUserProfile(user);
        response && setUser(response);
        setImage(null);
        alert('Profile updated');
    }

    const onSelectFile = e => {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => { setImage(reader.result) };
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    return (
        <main>
            <form className="login" onSubmit={updateProfile} style={{ "width": "30rem" }}>
                <UI.FormHeader title={`User ${user.login} profile`} />
                <div className="login_body">
                    <div className="login_photo" onClick={() => inputRef.current.click()}>
                        <img src={user.photo} alt="user_photo" />
                        <input id="file-input" type="file" accept="image/*" onChange={onSelectFile} style={{ "display": "none" }} ref={inputRef} />
                    </div>
                    { image &&
                        <FormImageUpload image={image} />
                    }
                    <UI.Input email value={user.email} onChange={changeValue} />
                    <UI.Input password value={user.password} onChange={changeValue} />
                    <UI.Input date value={user.date} onChange={changeValue} />
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
                <UI.SubmitButton value="Update" />
                <Link to="/people" className="link">Show users</Link>
            </form>
        </main>
    );
};