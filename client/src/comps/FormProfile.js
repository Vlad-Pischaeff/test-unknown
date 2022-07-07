import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from "./FormLayout";
import { FormImageUpload } from './FormImageUpload';
import * as UI from './customUI';
import API from '../api';

const FormProfile = () => {
    const { user, setUser } = useUser();
    const [ image, setImage ] = useState(null);
    const inputRef = useRef();

    const changeValue = e => {
        let obj = { ...user, [e.target.name]:e.target.value };
        setUser(obj);
    }

    const updateProfile = e => {
        e.preventDefault();
        API.patch(`api/users/${user._id}`, { ...user })
            .then(res => { setUser(res.data) })
            .catch(e => alert(`Error - ${e.response.data.message}`))
        setImage(null);
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
                    <input  className="login_input" 
                            type="email" 
                            name="email"
                            placeholder="email" 
                            required 
                            onChange={changeValue} 
                            value={user.email} />
                    <input  className="login_input" 
                            type="password" 
                            name="password"
                            placeholder="password" 
                            required 
                            onChange={changeValue} 
                            value={user.password} />
                    <input  className="login_input" 
                            type="date" 
                            name="date"
                            placeholder="birthday" 
                            required 
                            onChange={changeValue} 
                            value={user.date} />
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

export default FormProfile;