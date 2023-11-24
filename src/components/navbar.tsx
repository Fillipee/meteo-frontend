import logo from "../assets/images/logo.png";
import { EditSiteModal } from "./modals/edit-site-modal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type NavbarProps = {
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ station, setStation }: NavbarProps) => {
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
            <EditSiteModal />
            <p className="text-sm sm:text-md font-bold text-right">Friday 14:30</p>
        </header>
    );
};
