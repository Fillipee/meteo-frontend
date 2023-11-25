import { ChartType } from "@/types/types";
import { SetStateAction } from "react";

type WidgetProps = {
    text: string;
    value: string;
    chartTypeValue: ChartType;
    currentChartType: ChartType;
    setChartType: React.Dispatch<SetStateAction<ChartType>>;
    logoLight: string;
    logoDark: string;
    darkMode: boolean;
};

export const Widget = ({
    text,
    value,
    chartTypeValue,
    currentChartType,
    setChartType,
    logoLight,
    logoDark,
    darkMode,
}: WidgetProps) => {
    if (!value) {
        return <></>;
    }

    return (
        <button
            onClick={() => setChartType(chartTypeValue)}
            className={`w-full flex flex-row items-center justify-between px-6 py-4 rounded-3xl shadow-lg cursor-pointer transition-colors duration-200 ${
                chartTypeValue === currentChartType
                    ? "bg-primaryBlue-100 hover:bg-primaryBlue-200 dark:bg-primaryBlue-600 hover:dark:bg-primaryBlue-500"
                    : "bg-white hover:bg-primaryBlue-100 dark:bg-primaryBlue-800 hover:dark:bg-primaryBlue-600"
            }`}
        >
            <div>
                <p className="font-bold text-left">{text}</p>
                <p className="text-3xl">{value}</p>
            </div>

            <img src={darkMode ? logoDark : logoLight} className="h-14" alt={chartTypeValue} />
        </button>
    );
};
