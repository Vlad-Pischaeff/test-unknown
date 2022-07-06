import React, { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FormLayout = () => {
    const [user, setUser] = useState({"gender": "male", "photo": "http://localhost:5000/upload/icons8-person-64.png"})
    
    useEffect(() => {
        // console.log('Layout..', user)
    }, [user]);

    return (
        <div className="content">
            <Header />
            <Outlet context={{ user, setUser }}/>
            <Footer />
        </div>
    );
};

export default FormLayout;

export function useUser() {
    return useOutletContext();
};