import { format } from "date-fns";
import blueLogo from "../assets/images/blue_logo.png";
import whiteLogo from "../assets/images/white_logo.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { cs } from "date-fns/locale";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { EditStationModal } from "./modals/edit-station-modal";
import { AddStationModal } from "./modals/add-station-modal";
import { Station } from "@/types/types";

type NavbarProps = {
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
    darkMode: boolean;
    stations: Station[];
};

export const Navbar = ({ station, setStation, darkMode, stations }: NavbarProps) => {
    return (
        <header className="flex gap-x-2 justify-between items-center">
            <div className="flex sm:gap-x-6 items-center">
                {darkMode ? (
                    <>
                        <img src={whiteLogo} alt="LOGO" className="h-10 sm:h-12" />
                    </>
                ) : (
                    <>
                        <img src={blueLogo} alt="LOGO" className="h-10 sm:h-12" />
                    </>
                )}

                <Select value={station.toString()} onValueChange={setStation}>
                    <SelectTrigger className="w-[110px] sm:w-[160px]">
                        <SelectValue placeholder="Choose station" />
                    </SelectTrigger>
                    <SelectContent>
                        {stations.map((station) => (
                            <SelectItem value={station?.id.toString()} key={station.id}>
                                {station.name ? station.name : `Stanice ${station?.id}`}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <EditStationModal darkMode={darkMode} stations={stations} stationId={parseInt(station)} />
                <AddStationModal darkMode={darkMode} />
            </div>
            <TooltipProvider>
                <Tooltip delayDuration={100}>
                    <TooltipTrigger className="text-sm sm:text-md font-bold text-right">
                        {format(new Date(), "eeee")}{" "}
                        {format(new Date(), "p", {
                            locale: cs,
                        })}
                    </TooltipTrigger>
                    <TooltipContent>{format(new Date(), "PPP")} </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </header>
    );
};
