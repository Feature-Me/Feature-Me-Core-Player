import LinkWrapper from "Components/linkWrapper/linkWrapper";
import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./header.scss"

const Header: React.FC = () => {
    const navigate = useNavigate();

    return (
        <header className={style.header}>
            <LinkWrapper to="/">
                <h1>Feature Me Core Player</h1>
            </LinkWrapper>
            <LinkWrapper to="/convert">
                <h3>Chart converter</h3>
            </LinkWrapper>
            <LinkWrapper to="/links">
                <h3>Links</h3>
            </LinkWrapper>
        </header>
    )
}

export default Header