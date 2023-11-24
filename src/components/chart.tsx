import { ChartType, Weather } from "@/types/types";
import { format } from "date-fns";
import ReactEcharts from "echarts-for-react";

type ChartProps = {
    weather: Weather[] | null;
    chartType: ChartType;
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
            return weather?.map((value: Weather) => value?.pressury);
        default:
            return [];
    }
};

export const Chart = ({ weather, chartType }: ChartProps) => {
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
                    color: "#0F37FF44",
                },
            },
        ],
    };

    return (
        <section className="w-full bg-white rounded-3xl shadow">
            <ReactEcharts option={option} />
        </section>
    );
};
