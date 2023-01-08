import { atom } from "jotai";
import editorStateType from "Types/editorState";

const editorState = atom<editorStateType>({
    cursorPosition: {
        lineNumber: 1,
        column: 1
    },
    errors: [],
    editorType:"void",
    currentLanguage:"plaintext"
});

export default editorState;