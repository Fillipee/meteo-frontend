export type Weather = {
    stationId: number;
    data: {
        id: number;
        time: Date;
        temperature?: number;
        humidity?: number;
        pressure?: number;
        quality?: number;
        stationId: number;
    }[];
} | null;

export type ChartType = "temperature" | "humidity" | "pressure";

export type ChartValues = {
    min: Array<number>;
    max: Array<number>;
    mean: Array<number>;
    time: Array<string>;
};

export type Station = {
    id: number;
    mac: string;
    name: string;
    uri: string;
};

export type Data = {
    id: number;
    time: Date;
    temperature?: number;
    humidity?: number;
    pressure?: number;
    quality?: number;
    stationId: number;
} | null;
