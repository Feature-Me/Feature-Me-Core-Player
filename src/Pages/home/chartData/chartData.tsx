import React from "react";

import Editor from "@monaco-editor/react";
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { useAtom, useSetAtom } from "jotai";
import chartState from "State/chartState";
import { filesize } from "filesize";
import { BsBoxArrowUpRight, BsBoxArrowInDownLeft } from "react-icons/bs"

import editorState from "State/editorState";
import checkChartType from "Utils/checkChartType/checkChartType";

import style from "./chartData.scss"
import editorLanguageMap from "Features/editorLanguageMap/editorLanguageMap";

const ChartData: React.FC = () => {
    const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor>();
    const [fileData, setFileData] = React.useState<File | null>(null);
    const setChartData = useSetAtom(chartState);
    const [editorInfo, setEditorInfo] = useAtom(editorState);
    const [maximized, setMaximized] = React.useState(false);

    function uploadFile(e: React.ChangeEvent<HTMLInputElement> | null) {
        const files = e?.target.files
        if (!files) return
        const content = files[0];
        content.text().then(text => {
            editorRef.current?.setValue(text);
        });
        setFileData(content);
    }

    function handleChange(value?: string) {
        if (!value) value = "";
        setChartData(value);
        setEditorInfo(i => {
            return {
                ...i,
                editorType: checkChartType(value)
            }
        })
    }

    function handleValidate(e: monaco.editor.IMarker[]) {
        setEditorInfo(i => {
            return {
                ...i,
                errors: e
            }
        })

    }

    function editorMount(e: monaco.editor.IStandaloneCodeEditor) {
        const editorConfig = JSON.parse(localStorage.getItem("monacoSettings") || "{}");
        editorRef.current = e;
        editorRef.current?.updateOptions(editorConfig);


        //register events
        editorRef.current.onDidChangeCursorPosition((e) => setEditorInfo(i => { return { ...i, cursorPosition: e.position } }));
    }

    React.useEffect(() => {
        if (!editorRef.current?.getModel()) return;
        const language = editorLanguageMap.find(m => m.label == editorInfo.editorType)?.language || "json";
        setEditorInfo(i => {
            return {
                ...i,
                currentLanguage: language
            }
        })

    }, [editorInfo.editorType])

    React.useEffect(() => {
        window.addEventListener("resize", () => editorRef.current?.layout({} as monaco.editor.IDimension))

        document.title = "Home - Feature Me Core Player";
        return () => {
            window.removeEventListener("resize", () => editorRef.current?.layout({} as monaco.editor.IDimension))
            editorRef.current?.dispose();
        }
    }, [])

    return (
        <div className={`${style.chartEditor} ${maximized && style.maximized}`}>
            <h3 className={style.heading}>Chart Data - {editorInfo.editorType} </h3>
            <div className={style.editor} onScroll={e => { e.preventDefault(); e.stopPropagation() }}>
                <Editor
                    theme="vs-dark"
                    loading="Loading Editor..."
                    defaultLanguage="plaintext"
                    language={editorInfo.currentLanguage}
                    onMount={editorMount}
                    onChange={handleChange}
                    onValidate={handleValidate}
                    defaultValue="" />
            </div>
            <div className={style.toolbar}>
                <span>
                    {filesize(editorRef.current?.getModel()?.getValue().length || 0).toString()}
                </span>
                <span>
                    Line{editorInfo.cursorPosition.lineNumber} ,
                    Column{editorInfo.cursorPosition.column}
                </span>
                <span>
                    editor language : {editorInfo.currentLanguage || "plaintext"}
                </span>
                <span>
                    {editorInfo.errors.length} Error{editorInfo.errors.length > 1 && "s"}
                </span>
            </div>
            <div className={style.uploadFileContainer}>
                <input type="file" id="chartFileUploadInput" accept="application/json,.fmc" hidden onChange={uploadFile} />
                <label htmlFor="chartFileUploadInput" className={style.uploadFile}>
                    Click to upload file
                </label>
                {
                    fileData ? fileData.name : "No file chosen."
                }
                <div className={`${style.iconWrapper} ${style.switcher}`} data-maximized={String(maximized)}>
                    <BsBoxArrowUpRight onClick={() => setMaximized(true)} className={`${style.icon} ${style.maximize}`} />
                    <BsBoxArrowInDownLeft onClick={() => setMaximized(false)} className={`${style.icon} ${style.restore}`} />
                </div>
            </div>
        </div>
    )
}

export default ChartData;