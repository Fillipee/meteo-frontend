import { ChartType, ChartValues } from "@/types/types";
import { format } from "date-fns";
import ReactEcharts from "echarts-for-react";
import { PeriodButton } from "./ui/period-button";

type ChartProps = {
    chartType: ChartType;
    chartValues: ChartValues;
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

export const Chart = ({ chartType, chartValues, period, setPeriod }: ChartProps) => {
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

    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(chartValues))}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "data.json";

        link.click();
    };

    return (
        <section className="w-full bg-white dark:bg-primaryBlue-800 rounded-3xl shadow-lg">
            <div className="flex items-center justify-between">
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
                <button
                    onClick={exportData}
                    className="mr-12 mt-4 px-4 py-2 border-2 rounded-3xl border-primaryBlue-100 hover:bg-primaryBlue-100 dark:border-primaryBlue-600 dark:hover:bg-primaryBlue-600 transition-colors duration-200"
                >
                    Export
                </button>
            </div>
            <ReactEcharts option={option} />
        </section>
    );
};
