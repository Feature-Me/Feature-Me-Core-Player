import React from "react";
import { Routes, Route } from "react-router-dom";

const PageRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<div />} />
        </Routes>
    )
}

export default PageRouter;