import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormAuth from './comps/FormAuth';
import FormLayout from './comps/FormLayout';
import NotFound from './comps/NotFouond';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormLayout/>}>
                    <Route path="/" element={<FormAuth />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
