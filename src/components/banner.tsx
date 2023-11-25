import { Weather } from "@/types/types";
import { format, isBefore } from "date-fns";
import { EditSiteModal } from "./modals/edit-site-modal";
import { SetStateAction } from "react";
import { getTemperature } from "../lib/utils";

type BannerProps = {
    weather: Weather[] | null;
    temperatureUnit: string;
    setTemperatureUnit: React.Dispatch<SetStateAction<string>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<SetStateAction<boolean>>;
    pressureUnit: string;
    setPressureUnit: React.Dispatch<SetStateAction<string>>;
};

const isWinter = (day: number, month: number) => {
    return (month === 11 && day > 15) || month === 12 || month === 1 || month === 2;
};

export const Banner = ({
    weather,
    temperatureUnit,
    setTemperatureUnit,
    darkMode,
    setDarkMode,
    pressureUnit,
    setPressureUnit,
}: BannerProps) => {
    const getImage = () => {
        const now = new Date();
        const day = parseInt(format(now, "d", { useAdditionalDayOfYearTokens: true }));
        const month = parseInt(format(now, "L"));
        const year = parseInt(format(now, "Y"));
        const hour = parseInt(format(now, "H"));

        const isDayTime = isBefore(new Date(year, month, day, hour), new Date(year, month, day, 16));

        if (isDayTime) {
            if (hour > 3 && hour < 7) {
                return "bg-sunrise";
            }

            if (isWinter(day, month)) {
                return "bg-snow";
            }

            return "bg-sun";
        }

        if (hour < 18) {
            return "bg-sunset";
        }

        //Is nighttime
        if (isWinter(day, month)) {
            return "bg-nightSnow";
        }

        return "bg-night";
    };

    const temperature = weather ? weather[0]?.temperature : null;
    const formattedTemperature = getTemperature(temperature, temperatureUnit);

    return (
        <section
            className={`relative ${getImage()} bg-cover bg-right bg-no-repeat z-10
                            px-8 sm:px-16 py-12 min-h-[360px] shadow-lg rounded-3xl flex justify-between
                            before:content-[''] before:absolute before:inset-0 before:block before:rounded-3xl before:bg-gradient-to-b before:from-neutral-900 before:to-70% before:opacity-90 before:z-[-5]`}
        >
            <div>
                <p className="text-xl text-white">Olomouc, Czechia</p>
                <p className="text-7xl text-white mt-2 font-semibold">
                    {parseFloat(formattedTemperature.toString()).toFixed(2)}
                    {`${temperatureUnit !== "k" ? "°" : ""}${temperatureUnit.toUpperCase()}`}
                </p>
            </div>
            <EditSiteModal
                temperatureUnit={temperatureUnit}
                setTemperatureUnit={setTemperatureUnit}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
                pressureUnit={pressureUnit}
                setPressureUnit={setPressureUnit}
            />
        </section>
    );
};
