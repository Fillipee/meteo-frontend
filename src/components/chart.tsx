import { Weather } from "@/types/types";
import { format } from "date-fns";
import ReactEcharts from "echarts-for-react";

type ChartProps = {
    weather: Weather[] | null;
};

export const Chart = ({ weather }: ChartProps) => {
    const option = {
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: weather?.map((value: Weather) =>
                format(value?.time ? new Date(value?.time) : new Date(), "PPpp")
            ),
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
                data: weather?.map((value: Weather) => value?.temperature),
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
