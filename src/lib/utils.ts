import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getTemperature = (temperature: number | null | undefined, temperatureUnit: string) => {
    if (!temperature) {
        return 0;
    }

    switch (temperatureUnit) {
        case "c":
            return temperature;
        case "f":
            return temperature * 1.8 + 32;
        case "k":
            return temperature + 273;
        default:
            return temperature;
    }
};
