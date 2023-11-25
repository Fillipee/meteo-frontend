import { SetStateAction } from "react";
import { Widget } from "./widget";
import { ChartType, Data, Weather } from "@/types/types";
import { getTemperature } from "../lib/utils";

type WidgetsProps = {
    weather: Weather | null;
    chartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
    pressureUnit: string;
    temperatureUnit: string;
};

const getPressureValue = (weather: Data, pressureUnit: string) => {
    const value = weather?.pressure ? weather.pressure : null;

    if (!value) {
        return "";
    }

    switch (pressureUnit) {
        case "pa":
            return `${value.toString()}Pa`;
        case "hpa":
            return `${(value / 100).toString()}hPa`;
        case "kpa":
            return `${(value / 1000).toString()}kPa`;
        default:
            return "";
    }
};

export const Widgets = ({
    weather,
    chartType,
    setChartType,
    pressureUnit,
    temperatureUnit,
}: WidgetsProps) => {
    const lastWeather: Data = weather ? weather.data[weather.data?.length - 1] : null;

    const pressureValue = getPressureValue(lastWeather, pressureUnit);

    const temperature = weather ? weather.data[0].temperature : null;
    const formattedTemperature = getTemperature(temperature, temperatureUnit);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Widget
                text="Temperature"
                value={`${parseFloat(formattedTemperature.toString()).toFixed(2)}${
                    temperatureUnit !== "k" ? "°" : ""
                }${temperatureUnit.toUpperCase()}`}
                chartTypeValue="temperature"
                currentChartType={chartType}
                setChartType={setChartType}
            />
            <Widget
                text="Moisture"
                value={lastWeather?.humidity ? `${lastWeather?.humidity.toString()}%` : ""}
                chartTypeValue="humidity"
                currentChartType={chartType}
                setChartType={setChartType}
            />
            <Widget
                text="Pressure"
                value={pressureValue}
                chartTypeValue="pressure"
                currentChartType={chartType}
                setChartType={setChartType}
            />
        </section>
    );
};
