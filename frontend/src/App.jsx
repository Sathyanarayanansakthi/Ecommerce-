// import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateItems from "./pages/CreateItem.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/items" element={<CreateItems />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
