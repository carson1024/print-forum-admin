import { CallReportType } from "./calls";

export let pairsCache: {
    [key: string]: CallReportType
} = {};

export const clearCache = () => {
    pairsCache = {};
}