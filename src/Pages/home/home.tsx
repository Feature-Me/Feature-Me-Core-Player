import React from "react";
import { HashRouter } from "react-router-dom";
import ChamferedButton from "Components/Button/chamferedButton/chamferedButton";

import style from "./home.scss";
import AudioCard from "./audioCard/audioCard";
import ChartData from "./chartData/chartData";
import Header from "Components/Header/header";


const Home: React.FC = () => {
    return (
        <div className={style.home}>
            <Header />
            <div className={style.content}>
                <div className={style.editor}>
                    <AudioCard />
                    <ChartData />
                </div>
            </div>
        </div>
    )
}

export default Home