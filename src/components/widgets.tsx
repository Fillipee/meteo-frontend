import { SetStateAction } from "react";
import { Widget } from "./widget";
import { ChartType, Weather } from "@/types/types";

type WidgetsProps = {
    weather: Weather[] | null;
    chartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
    pressureUnit: string;
};

const getPressureValue = (weather: Weather, pressureUnit: string) => {
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

export const Widgets = ({ weather, chartType, setChartType, pressureUnit }: WidgetsProps) => {
    const lastWeather: Weather | null = weather ? weather[weather?.length - 1] : null;

    const pressureValue = getPressureValue(lastWeather, pressureUnit);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Widget
                text="Temperature"
                value={lastWeather?.temperature ? `${lastWeather.temperature.toString()}°C` : ""}
                chartTypeValue="temperature"
                currentChartType={chartType}
                setChartType={setChartType}
            />
            <Widget
                text="Moisture"
                value={lastWeather?.humidity ? `${lastWeather.humidity.toString()}%` : ""}
                chartTypeValue="moisture"
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
