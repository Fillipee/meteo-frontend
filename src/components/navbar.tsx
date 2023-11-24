import { Link } from "./ui/link";
import logo from "../assets/images/logo.png";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

type NavbarProps = {
    setStation: React.Dispatch<React.SetStateAction<string>>;
};

export const Navbar = ({ setStation }: NavbarProps) => {
    return (
        <header className="flex gap-x-2 justify-between items-center">
            <div className="flex gap-x-6 items-center">
                <img src={logo} alt="LOGO" className="h-10 sm:h-12" />
                <Select onValueChange={setStation}>
                    <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Choose station" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Stanice 1</SelectItem>
                        <SelectItem value="2">Stanice 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="hidden sm:flex gap-x-4">
                <Link href="#">Daily</Link>
                <Link href="#" active>
                    Weekly
                </Link>
                <Link href="#">Monthly</Link>
            </div>
            <div className="sm:hidden">
                <Select>
                    <SelectTrigger className="w-[160px]">
                        <SelectValue placeholder="Choose period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="1">Daily</SelectItem>
                        <SelectItem value="2">Weekly</SelectItem>
                        <SelectItem value="2">Month</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <p className="text-sm sm:text-md font-bold">Friday 14:30</p>
        </header>
    );
};
