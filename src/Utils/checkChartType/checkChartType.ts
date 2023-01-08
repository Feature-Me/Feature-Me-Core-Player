import isFeatureMeBlossomChart from "Utils/checkChartType/FMBlossomChecker/FeatureMeBlossomChartChecker";
import json5 from "json5";

const FMAlphaProps = ["BPM", "offset", "title", "diff", "lev", "music", "artist", "notes"]
const FMCProps = ["metadata", "notes", "effects"]

type checkChartTypeReturns = "Feature Me Alpha JSON (.json)" | "Feature Me Blossom Chart (.fmc)" | "Feature Me JSON5 (.fmc)" | "Another File" | "void"
function checkChartType(chart?: string): checkChartTypeReturns {
    let isJson: boolean;
    let chartType: checkChartTypeReturns = "Another File";

    if (!chart || !chart.trim()) return "void";
    try {
        json5.parse(chart)
        isJson = true;
    } catch (error) {
        isJson = false;
    }

    if (isJson) {
        //get properties
        const keys = Object.keys(json5.parse(chart));
        let hasAllkey = true;
        //check each propery names. if there is missing key,change value
        for (const key of FMCProps) {
            if (!keys.includes(key)) hasAllkey = false;
        }
        if (hasAllkey) chartType = "Feature Me JSON5 (.fmc)";
        else {
            hasAllkey = true;
            for (const key of FMAlphaProps) {
                if (!keys.includes(key)) hasAllkey = false;
            }
            if (hasAllkey) chartType = "Feature Me Alpha JSON (.json)";
            else chartType = "Another File";
        }
    } else {
        if (isFeatureMeBlossomChart(chart)) chartType = "Feature Me Blossom Chart (.fmc)";
        else chartType = "Another File";
    }
    return chartType
}

export default checkChartType;