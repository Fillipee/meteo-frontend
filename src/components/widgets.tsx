import { SetStateAction } from "react";
import { Widget } from "./widget";
import { ChartType } from "@/types/types";

type WidgetsProps = {
    chartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
};

export const Widgets = ({ chartType, setChartType }: WidgetsProps) => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Widget
                text="Temperature"
                value="26°C"
                chartTypeValue="temperature"
                currentChartType={chartType}
                setChartType={setChartType}
            />
            <Widget
                text="Moisture"
                value="30%"
                chartTypeValue="moisture"
                currentChartType={chartType}
                setChartType={setChartType}
            />
            <Widget
                text="Pressure"
                value="980,4 hPa"
                chartTypeValue="pressure"
                currentChartType={chartType}
                setChartType={setChartType}
            />
        </section>
    );
};
