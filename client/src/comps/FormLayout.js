import React, { useState } from 'react';
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const FormLayout = () => {
    const [user, setUser] = useState({ "gender": "male" });
    
    return (
        <div className="content">
            <Header />
            <Outlet context={{ user, setUser }}/>
            <Footer />
        </div>
    );
}

export default FormLayout;

export const useUser = () => useOutletContext();