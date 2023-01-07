import React from "react";
import { createRoot } from "react-dom/client";
import initLocalStorage from "Utils/Storage/LocalStorage/initLocalStorage";
import { HashRouter } from "react-router-dom";
import * as THREE from "three";
import * as PIXI from "pixi.js";
import * as phina from "phina.js";

import ErrorBoundary from "Components/errorBoundary/errorBoundary";
import PageRouter from "Routs/router";

import version from "Config/versions.json";

import style from "./App.scss";


function App(): JSX.Element {

    return (
        <HashRouter>
            <div className={style.app}>
                <PageRouter />
            </div>
        </HashRouter>
    )
}


function render(): void {
    const container: HTMLDivElement = document.querySelector("#root")!;
    createRoot(container).render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    );
}


function init(): void {
    initLocalStorage();
    render();

    console.log("Feature Me Core Player initialized. the application is ready.");
    console.log("%c Hold up!", "color:red;font-size:64px;border:4px solid black;");
    console.log("%c Please be careful when you paste anything to console.\n Attackers may steal your information.", "color:#ffa69f;background-color:#633023;font-size:16px;");
    console.log("%c  Do you know what you are supposed to do with this tool? If you do, how about contributing to this project?", "color:#1189da;font-size:24px;");
    console.log(`%c Running Feature Me ${version.version}.`, "color:#a0d6a6;background-color:#2d3c2e;font-size:16px;");
    console.log(`%c React${React.version}\n THREE.JS${THREE.REVISION}\n Pixijs${PIXI.VERSION}\n Phina.js${phina.VERSION}`, "color:#f3c0e6;background-color:#3c2d38;font-size:16px;");

}
window.addEventListener('load', init);
window.addEventListener("contextmenu", (e) => e.preventDefault());
window.addEventListener("popstate", (e) => { });