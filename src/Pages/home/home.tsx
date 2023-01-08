import React from "react";
import { HashRouter } from "react-router-dom";
import ChamferedButton from "Components/Button/chamferedButton/chamferedButton";

import style from "./home.scss";
import AudioCard from "./audioCard/audioCard";
import ChartData from "./chartData/chartData";


const Home: React.FC = () => {
    return (
        <div className={style.home}>
            <h1>Feature Me Core Player</h1>
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