import defaultSettings from "./default/monaco.settings";

function initLocalStorage(): void {
    try {
        localStorage.setItem("monacoSettings", JSON.stringify({ ...defaultSettings, ...JSON.parse(localStorage.getItem("monacoSettings") || "{}") }))
    } catch (error) {
        console.error(error);
    }
}

export default initLocalStorage;