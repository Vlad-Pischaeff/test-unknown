import React, { useState } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SERVER } from '../conf';

export const FormLayout = () => {
    const [user, setUser] = useState({ "gender": "male", "photo": `${SERVER}/upload/icons8-person-64.png` });
    
    return (
        <div className="content">
            <Header />
            <Outlet context={{ user, setUser }}/>
            <Footer />
        </div>
    );
};

export const useUser = () => useOutletContext();