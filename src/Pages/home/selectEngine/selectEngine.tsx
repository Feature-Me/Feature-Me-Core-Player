import LinkWrapper from "Components/linkWrapper/linkWrapper";
import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./selectEngine.scss"

const EngineSelector: React.FC = () => {

    const engines: gameEngines = [
        {
            version: "Feature Me Alpha (0.4.0)",
            renderer: "PixiJS",
            created: 1674672659256,
            repository: "https://github.com/Feature-Me/Feature-me-Alpha-v0.x",
            to: "/FMAlphaPixi"
        },
        {
            version: "Feature Me (0.5 ~ 0.6)",
            renderer: "Three.js",
            created: 1664615650512,
            repository: "https://github.com/Feature-Me/Feature-Me",
            to: "/FMThree"
        },
        {
            version: "Feature Me Alpha (>= 0.3.0)",
            renderer: "Phina.js",
            created: 1674672659256,
            repository: "https://github.com/Feature-Me/Feature-me-Alpha-v0.x",
            to: "/FMAlphaPhina"
        },
        {
            version: "Feature Me Blossom WebGL",
            renderer: "Three.js",
            created: 1674672659256,
            repository: "",
            to: "/FMBlossom"
        },
        {
            version: "ThunderStorm 6K",
            renderer: "Phina.js",
            created: 0,
            repository: "",
            to: "/ThunderStorm"
        }
    ]

    return (
        <div className={style.engineSelector}>
            {
                engines.map(engine => {
                    const navigate = useNavigate();
                    return (
                        <LinkWrapper to={engine.to} key={engine.version}>
                            <div className={style.engineCard}>
                                <h2 className={style.heading}>{engine.renderer} - {engine.version}</h2>
                                <h3>Engine Released at {new Date(engine.created).toDateString()}</h3>
                                <a href={engine.repository} target="_blank" >{engine.repository}</a>
                            </div>
                        </LinkWrapper>
                    )
                })
            }
        </div>
    )
}

export default EngineSelector