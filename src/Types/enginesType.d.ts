type gameEngines = Array<gameEngine>

interface gameEngine {
    version:string
    renderer:string
    created:number
    repository:string
    to:string
}