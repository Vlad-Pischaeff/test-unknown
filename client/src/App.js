import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAuth from './comps/FormAuth';
import FormLayout from './comps/FormLayout';
import FormProfile from './comps/FormProfile';
import FormUsers from './comps/FormUsers';
import NotFound from './comps/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormLayout/>}>
                    <Route path="/" element={<FormAuth />} />
                    <Route path="/account" element={<FormProfile />} />
                    <Route path="/people" element={<FormUsers />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
