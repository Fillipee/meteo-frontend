export type Weather = {
    id: number;
    time: Date;
    temperature?: number;
    humidity?: number;
    pressure?: number;
    quality?: number;
    stationId: number;
} | null;

export type ChartType = "temperature" | "moisture" | "pressure";
