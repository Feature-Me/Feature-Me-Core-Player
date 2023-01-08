type chartTypes = "Feature Me Alpha JSON (.json)" | "Feature Me Blossom Chart (.fmc)" | "Feature Me JSON5 (.fmc)" | "Another File" | "void"
interface languageMap {
    label: chartTypes
    language:string
}
const editorLanguageMap:Array<languageMap> = [
    {
        label:"Feature Me Alpha JSON (.json)",
        language:"json"
    },
    {
        label:"Feature Me JSON5 (.fmc)",
        language:"coffeescript"
    },
    {
        label:"Feature Me Blossom Chart (.fmc)",
        language:"plaintext"
    },
    {
        label:"Another File",
        language:"plaintext"
    },
    {
        label:"void",
        language:"plaintext"
    }
]

export default editorLanguageMap;