import { Weather } from "@/types/types";
import { format, isBefore } from "date-fns";
import { Settings } from "lucide-react";

type BannerProps = {
    weather: Weather[] | null;
};

const isWinter = (day: number, month: number) => {
    return (month === 11 && day > 15) || month === 12 || month === 1 || month === 2;
};

export const Banner = ({ weather }: BannerProps) => {
    const getImage = () => {
        const now = new Date();
        const day = parseInt(format(now, "d", { useAdditionalDayOfYearTokens: true }));
        const month = parseInt(format(now, "L"));
        const year = parseInt(format(now, "Y"));
        const hour = parseInt(format(now, "H"));

        const isDayTime = isBefore(new Date(year, month, day, hour), new Date(year, month, day, 16));

        console.log(isDayTime);
        if (isDayTime) {
            if (hour > 0 && hour < 7) {
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

    return (
        <section
            className={`relative ${getImage()} bg-cover bg-right bg-no-repeat z-10
                            px-8 sm:px-16 py-12 min-h-[360px] shadow rounded-3xl flex justify-between
                            before:content-[''] before:absolute before:inset-0 before:block before:rounded-3xl before:bg-gradient-to-b before:from-neutral-900 before:to-70% before:opacity-90 before:z-[-5]`}
        >
            <div>
                <p className="text-xl text-white">Olomouc, Czechia</p>
                <p className="text-7xl text-white mt-2 font-semibold">
                    {weather ? weather[0]?.temperature : ""}°C
                </p>
            </div>
            <Settings className="mt-4 h-6 w-6 cursor-pointer hover:animate-rotate-little" color="#fff" />
        </section>
    );
};
