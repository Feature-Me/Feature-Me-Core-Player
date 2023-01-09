import React from "react";
import ChamferedButton from "Components/Button/chamferedButton/chamferedButton";

import style from "./converter.scss";
import Header from "Components/Header/header";


const Converter: React.FC = () => {
    return (
        <div className={style.converter}>
            <Header />
            <div className={style.content}>
            </div>
        </div>
    )
}

export default Converter