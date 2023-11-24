import { ChartType, Weather } from "@/types/types";
import { format } from "date-fns";
import ReactEcharts from "echarts-for-react";
import { PeriodButton } from "./ui/period-button";

type ChartProps = {
    weather: Weather[] | null;
    chartType: ChartType;
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

const getXAxis = (weather: Weather[] | null, chartType: ChartType) => {
    switch (chartType) {
        case "temperature":
            return weather?.map((value: Weather) =>
                format(value?.time ? new Date(value?.time) : new Date(), "PPpp")
            );
        default:
            return [];
    }
};

const getYxis = (weather: Weather[] | null, chartType: ChartType) => {
    switch (chartType) {
        case "temperature":
            return weather?.map((value: Weather) => value?.temperature);
        case "moisture":
            return weather?.map((value: Weather) => value?.humidity);
        case "pressure":
            return weather?.map((value: Weather) => value?.pressure);
        default:
            return [];
    }
};

export const Chart = ({ weather, chartType, period, setPeriod }: ChartProps) => {
    const option = {
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: getXAxis(weather, chartType),
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                name: "Temperature",
                type: "line",
                stack: "Total",
                data: getYxis(weather, chartType),
                areaStyle: {
                    color: localStorage.getItem("darkMode") === "true" ? "#0F37FF44" : "#fff",
                },
            },
        ],
    };

    return (
        <section className="w-full bg-white dark:bg-primaryBlue-800 rounded-3xl shadow-lg">
            <div className="flex gap-x-4 px-20 pt-8 pb-2">
                <PeriodButton periodValue="daily" period={period} setPeriod={setPeriod}>
                    Daily
                </PeriodButton>
                <PeriodButton periodValue="weekly" period={period} setPeriod={setPeriod}>
                    Weekly
                </PeriodButton>
                <PeriodButton periodValue="monthly" period={period} setPeriod={setPeriod}>
                    Monthly
                </PeriodButton>
            </div>
            <ReactEcharts option={option} />
        </section>
    );
};
