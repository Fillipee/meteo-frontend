import { Weather } from "@/types/types";
import { Settings } from "lucide-react";

type BannerProps = {
    weather: Weather[] | null;
};

export const Banner = ({ weather }: BannerProps) => {
    return (
        <section
            className="relative bg-sunrise bg-cover bg-right bg-no-repeat z-10
                            px-8 sm:px-16 py-12 min-h-[360px] shadow rounded-3xl flex justify-between
                            before:content-[''] before:absolute before:inset-0 before:block before:rounded-3xl before:bg-gradient-to-b before:from-neutral-900 before:to-70% before:opacity-90 before:z-[-5]"
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
