export type Weather = {
    id: number;
    time: Date;
    temperature?: number;
    humidity?: number;
    pressury?: number;
    quality?: number;
    stationId: number;
} | null;
