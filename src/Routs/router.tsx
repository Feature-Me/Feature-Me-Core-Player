import Home from "Pages/home/home";
import React from "react";
import { Routes, Route } from "react-router-dom";

const PageRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default PageRouter;