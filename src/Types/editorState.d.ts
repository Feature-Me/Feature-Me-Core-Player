import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
type editorStateType = {
    cursorPosition: {
        lineNumber: number
        column: number
    },
    errors: Array<monaco.editor.IMarker>
    editorType: "Feature Me Alpha JSON (.json)" | "Feature Me Blossom Chart (.fmc)" | "Feature Me JSON5 (.fmc)" | "Another File" | "void"
    currentLanguage:string
}

export default editorStateType