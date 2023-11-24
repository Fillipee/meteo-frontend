import { SetStateAction } from "react";
import { Widget } from "./widget";
import { ChartType, Weather } from "@/types/types";

type WidgetsProps = {
    weather: Weather[] | null;
    chartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
};

export const Widgets = ({ weather, chartType, setChartType }: WidgetsProps) => {
    const lastWeather: Weather | null = weather ? weather[weather?.length - 1] : null;

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
                value={lastWeather?.pressury ? `${lastWeather.pressury.toString()}hPa` : ""}
                chartTypeValue="pressure"
                currentChartType={chartType}
                setChartType={setChartType}
            />
        </section>
    );
};
