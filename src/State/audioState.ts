import { atom } from "jotai";

const audioState = atom<{ data: ArrayBuffer, mime: string }>({
    data: new ArrayBuffer(0),
    mime: "audio/mp3"
});

export default audioState;