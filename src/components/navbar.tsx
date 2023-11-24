import logo from "../assets/images/logo.png";
import { PeriodButton } from "./ui/period-button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type NavbarProps = {
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ station, setStation, period, setPeriod }: NavbarProps) => {
    return (
        <header className="flex gap-x-2 justify-between items-center">
            <div className="flex sm:gap-x-6 items-center">
                <img src={logo} alt="LOGO" className="h-10 sm:h-12" />
                <Select value={station} onValueChange={setStation}>
                    <SelectTrigger className="w-[110px] sm:w-[160px]">
                        <SelectValue placeholder="Choose station" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Stanice 1</SelectItem>
                        <SelectItem value="2">Stanice 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="hidden sm:flex gap-x-4">
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
            <div className="sm:hidden">
                <Select value={period} onValueChange={setPeriod}>
                    <SelectTrigger className="w-[110px]">
                        <SelectValue placeholder="Choose period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <p className="text-sm sm:text-md font-bold text-right">Friday 14:30</p>
        </header>
    );
};
