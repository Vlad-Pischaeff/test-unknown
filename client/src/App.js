import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLayout from './comps/FormLayout';
import FormLogin from './comps/FormLogin';
import NotFound from './comps/NotFouond';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FormLayout />}>
                    <Route path="/" element={<FormLogin />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
