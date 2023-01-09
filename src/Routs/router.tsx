import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "Pages/home/home";
import lazyLoad from "Utils/lazyLoad/lazyLoad";
const Converter  = lazyLoad(()=>import("Pages/converter/converter"))
const PageRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/convert" element={<Converter />} />
        </Routes>
    )
}

export default PageRouter;