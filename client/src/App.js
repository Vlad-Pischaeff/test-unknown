import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as FORM from './comps';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FORM.FormLayout/>}>
                    <Route index element={<FORM.FormAuth />} />
                    <Route path="/account" element={<FORM.FormProfile />} />
                    <Route path="/people" element={<FORM.FormUsers />} />
                    <Route path="*" element={<FORM.NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;