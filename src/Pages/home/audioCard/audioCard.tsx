import ChamferedButton from "Components/Button/chamferedButton/chamferedButton";
import { Howl } from "howler";
import { useSetAtom } from "jotai";
import React from "react";
import { MdPlayArrow, MdPause } from "react-icons/md";
import audioState from "State/audioState";
import arrayBufferToBase64 from "Utils/ArrayBuffertoBase64/ArrayBuffertoBase64";
import msToStringTime from "Utils/msToStringTime/msToStringTime";

import style from "./audioCard.scss";

const AudioCard: React.FC = () => {
    const setAudioData = useSetAtom(audioState);
    const [playing, setPlaying] = React.useState<boolean>(false);
    const [fileData, setFileData] = React.useState<File | null>(null);
    const [duration, setDuration] = React.useState<number>(0)
    let audio = React.useRef<Howl>(
        new Howl(
            {
                src: `data:audio/mp3;base64,${arrayBufferToBase64(new ArrayBuffer(0))}`
            }
        )
    );

    function uploadFile(e: React.ChangeEvent<HTMLInputElement> | null) {
        const files = e?.target.files
        if (!files) return
        const content = files[0];
        if (!content.type.includes("audio")) return;
        content.arrayBuffer().then(buffer => {
            audio.current = new Howl({ src: `data:${content.type};base64,${arrayBufferToBase64(buffer)}` })
            audio.current.once("load", () => setDuration(audio.current.duration() * 1000))
            setAudioData({
                data: buffer,
                mime: content.type
            })
        });
        setFileData(content);

        setPlaying(false);
    }

    React.useEffect(() => {
        audio.current.on("end", () => setPlaying(false));
        return () => {
            audio.current.off("end");
            audio.current.stop();
            audio.current.unload();
        }
    }, [])

    React.useEffect(() => {
        if (playing) audio.current.play();
        else audio.current.pause();
    }, [playing])

    const uploadMenu = (
        <div className={style.uploadMenu}>
            <h3>No file chosen.</h3>
            <label htmlFor="musicFileUploadInput" className={style.uploadFile}>
                Click to upload audio file
            </label>
        </div>
    );

    const audioInfo = (
        <div className={style.audioInfo}>
            <h3>{fileData?.name}</h3>
            <span>{msToStringTime(duration)}</span>
            <div className={`${style.iconWrapper} ${style.player}`} data-playing={String(playing)}>
                <MdPlayArrow onClick={() => setPlaying(true)} className={`${style.icon} ${style.play}`} />
                <MdPause onClick={() => setPlaying(false)} className={`${style.icon} ${style.pause}`} />
            </div>
            <label htmlFor="musicFileUploadInput" className={style.uploadFile}>
                Click to change  audio file
            </label>
        </div>
    )


    return (
        <div className={style.audio}>
            <h3 className={style.heading}>Audio File</h3>
            {
                fileData ?
                    audioInfo : uploadMenu
            }
            <input type="file" id="musicFileUploadInput" accept="audio/*" hidden onChange={uploadFile} />
        </div>
    )
}

export default AudioCard