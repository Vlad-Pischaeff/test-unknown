import React,  { useState, useEffect } from 'react';
import { useUser } from "./FormLayout";
import { Link } from 'react-router-dom';
import * as UI from './customUI';
import API from '../api';

const FormUsers = () => {
    const { user } = useUser();
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        user
            ? API.get(`api/users/exclude/${user._id}`)
                .then(res => { setUsers(res.data) })
                .catch(e => alert(`Error - ${e.response.data.message}`))
            : alert("User undefined");
        // eslint-disable-next-line
    }, [])

    return (
        <main>
            <form className="login" style={{ "width": "30rem" }}>
                <div className="login_header">
                    Accounts
                </div>
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

export default FormUsers;