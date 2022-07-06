import React,  { useState, useEffect } from 'react';
import { useUser } from "./FormLayout";
import { Link } from 'react-router-dom';
import API from '../api';

const FormUsers = () => {
    const { user } = useUser();
    const [ users, setUsers ] = useState([]);

    const getAge = date => {
        let diffDate = Date.now() - +new Date(date);
        let ageDate = new Date(diffDate);
        let age = ageDate.getUTCFullYear() - 1970;
        return age;
    }

    useEffect(() => {
        API.get(`api/users/exclude/${user._id}`)
            .then(res => { 
                console.log('users..', res.data)
                setUsers(res.data) 
            })
            .catch(e => alert(`Error - ${e.response.data.message}`))
    }, [])

    return (
        <main>
            <form className="login" style={{ "width": "30rem" }}>
                <div className="login_header">
                    Accounts
                </div>
                <div className="login_body">
                    { users.length &&
                        users.map(user => {
                            return (
                                <div className="usrs_wrap" key={user._id}>
                                    <div className="usrs_wrap-photo" >
                                        <img src={user.photo} />
                                    </div>
                                    <div className="usrs_wrap-name">{user.login}</div>
                                    <div className="usrs_wrap-date">{getAge(user.date)} yrs</div>
                                </div>
                            )
                        })
                    }
                </div>
                <Link to="../" className="link">Back</Link>
            </form>
        </main>
    );
};

export default FormUsers;