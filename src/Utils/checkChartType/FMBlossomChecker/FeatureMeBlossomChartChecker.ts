import { object } from "prop-types";

interface FeatureMeBlossomChart {
    meta: { [key: string]: string }
    config: Array<{ type: string, value: string }>
    notes: Array<{ type: string, value: string }>
    counters: { [key: string]: number }
}
const metadataKeys = ["music", "title", "bpm", "difficulty", "time"];

function isFeatureMeBlossomChart(datastring: string) {
    let isValid: boolean = false
    try {
        datastring = datastring.trim().replace(/\/\/.*$/gm, "").replace(/^\n/gm, "");
        let datastringArray = datastring.split("\n");
        let chart: FeatureMeBlossomChart = {
            meta: {},
            config: [],
            notes: [],
            counters: { tap: 0, hold: 0, bright: 0, seed: 0, flick: 0, speed: 0, camera: 0 }
        };
        for (const i of datastringArray) {
            if (i.startsWith("#")) {
                let data = i.split(":");
                const key = data[0].substring(1);
                const value = data[1].trim();
                chart.meta[key] = value;
            } else if (i.startsWith("!")) {
                let data = i.split(":");
                const key = data[0].substring(1);
                const value = data[1].trim();
                chart.config.push({
                    type: key,
                    value: value
                });
            } else {
                let data = i.split(":");
                const key = data[0].trim();
                const value = data[1].trim();
                chart.notes.push({
                    type: key,
                    value: value
                });
            }
        }

        let hasAllkey = true;
        //check each propery names. if there is missing key,change value
        for (const key of metadataKeys) {
            if (!Object.keys(chart.meta).includes(key)) hasAllkey = false;
        }
        if (hasAllkey) isValid = true;
    } catch (error) {
        isValid = false
    }
    return isValid
}

export default isFeatureMeBlossomChart