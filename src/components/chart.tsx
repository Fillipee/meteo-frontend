import ReactEcharts from "echarts-for-react";
import "echarts/lib/component/graphic";

export const Chart = () => {
    const option = {
        tooltip: {
            trigger: "axis",
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
                data: [120, 132, 101, 134, 90, 230, 210],
                areaStyle: {
                    color: "#0F37FF44",
                },
            },
        ],
    };

    return (
        <section className="w-full bg-white rounded-3xl">
            <ReactEcharts option={option} />
        </section>
    );
};
