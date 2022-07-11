import React,  { useState, useEffect } from 'react';
import { useUser } from "./FormLayout";
import { Link } from 'react-router-dom';
import * as UI from './customUI';
import API from '../api';

export const FormUsers = () => {
    const { user } = useUser();
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        user
            ? API.getUsersExcept(user).then(res => { setUsers(res) })
            : alert("User undefined");
        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <form className="login" style={{ "width": "30rem" }}>
                <UI.FormHeader title="Accounts" />
                <div className="login_body">
                    { users.length &&
                        users.map(user => <UI.UserProfile user={user} key={user._id} />)
                    }
                </div>
                <Link to="../" className="link">Back</Link>
            </form>
        </main>
    );
};