import { ChartType, ChartValues, Weather } from "@/types/types";
import { format } from "date-fns";
import ReactEcharts from "echarts-for-react";
import { PeriodButton } from "./ui/period-button";
import { useEffect, useState } from "react";
import axios from "axios";

type ChartProps = {
    chartType: ChartType;
    chartValues: ChartValues;
};

const getXAxis = (weather: Weather[] | null, chartType: ChartType) => {
    return weather?.map((value: Weather) => format(value?.time ? new Date(value?.time) : new Date(), "PPpp"));
};

const getYxis = (weather: Weather[] | null, chartType: ChartType) => {
    switch (chartType) {
        case "temperature":
            return weather?.map((value: Weather) => value?.temperature);
        case "humidity":
            return weather?.map((value: Weather) => value?.humidity);
        case "pressure":
            return weather?.map((value: Weather) => value?.pressure);
        default:
            return [];
    }
};

export const Chart = ({ chartType, chartValues }: ChartProps) => {
    const [period, setPeriod] = useState<string>("weekly");

    const option = {
        tooltip: {
            trigger: "axis",
        },
        legend: {
            data: ["Min", "Max", "Mean"],
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            // data: chartValues.time.map((time) => format(new Date(time), "PPpp")),
        },
        yAxis: {
            type: "value",
            splitLine: {
                show: false,
            },
        },
        series: [
            {
                name: "Min",
                type: "line",
                stack: "Total",
                data: chartValues.min,
                areaStyle: {
                    color: localStorage.getItem("darkMode") === "true" ? "#0F37FF44" : "#fff",
                },
            },
            {
                name: "Max",
                type: "line",
                stack: "Total",
                data: chartValues.max,
                areaStyle: {
                    color: localStorage.getItem("darkMode") === "true" ? "#0F37FF44" : "#fff",
                },
            },
            {
                name: "Mean",
                type: "line",
                stack: "Total",
                data: chartValues.mean,
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
