import { SetStateAction } from "react";
import { Widget } from "./widget";
import { ChartType, Data, Weather } from "@/types/types";
import { getTemperature } from "../lib/utils";
import temperatureBlue from "../assets/images/teplota_blue.png";
import temperatureWhite from "../assets/images/teplota_white.png";
import pressureBlue from "../assets/images/tlak_blue.png";
import pressureWhite from "../assets/images/tlak_white.png";
import moistureBlue from "../assets/images/vlhkost_blue.png";
import moistureWhite from "../assets/images/vlhkost_white.png";

type WidgetsProps = {
    weather: Weather | null;
    chartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
    pressureUnit: string;
    temperatureUnit: string;
    darkMode: boolean;
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
    darkMode,
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
                logoLight={temperatureBlue}
                logoDark={temperatureWhite}
                darkMode={darkMode}
            />
            <Widget
                text="Moisture"
                value={lastWeather?.humidity ? `${lastWeather?.humidity.toString()}%` : ""}
                chartTypeValue="humidity"
                currentChartType={chartType}
                setChartType={setChartType}
                logoLight={moistureBlue}
                logoDark={moistureWhite}
                darkMode={darkMode}
            />
            <Widget
                text="Pressure"
                value={pressureValue}
                chartTypeValue="pressure"
                currentChartType={chartType}
                setChartType={setChartType}
                logoLight={pressureBlue}
                logoDark={pressureWhite}
                darkMode={darkMode}
            />
        </section>
    );
};
