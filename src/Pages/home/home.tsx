import React from "react";
import { HashRouter } from "react-router-dom";
import { useAtomValue } from "jotai";

import AudioCard from "./audioCard/audioCard";
import ChartData from "./chartData/chartData";
import Header from "Components/Header/header";
import EngineSelector from "./selectEngine/selectEngine";

import editorState from "State/editorState";

import style from "./home.scss";

const Home: React.FC = () => {
    const { maximized } = useAtomValue(editorState);

    return (
        <div className={style.home}>
            <Header />
            <div className={`${style.content} ${maximized && style.editorMaximized}`}>
                <div className={style.editor}>
                    <AudioCard />
                    <ChartData />
                </div>
                <div className={style.selectEngine}>
                    <h2>Select Game Engine</h2>
                    <EngineSelector />
                </div>
            </div>
        </div>
    )
}

export default Home