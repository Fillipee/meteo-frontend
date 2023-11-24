import blueLogo from "../assets/images/blue_logo.png";
import whiteLogo from "../assets/images/white_logo.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type NavbarProps = {
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ station, setStation }: NavbarProps) => {
    return (
        <header className="flex gap-x-2 justify-between items-center">
            <div className="flex sm:gap-x-6 items-center">
                {localStorage.getItem("darkMode") === "true" ? (
                    <>
                        <img src={whiteLogo} alt="LOGO" className="h-10 sm:h-12" />
                    </>
                ) : (
                    <>
                        <img src={blueLogo} alt="LOGO" className="h-10 sm:h-12" />
                    </>
                )}

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
            <p className="text-sm sm:text-md font-bold text-right">Friday 14:30</p>
        </header>
    );
};
