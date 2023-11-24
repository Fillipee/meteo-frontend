import { Link } from "./ui/link";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
    return (
        <header className="flex gap-x-2 justify-between items-center">
            <div className="flex gap-x-6 items-center">
                <img src={logo} alt="LOGO" className="h-12" />
                Stanice
            </div>
            <div className="flex gap-x-4">
                <Link href="#">Daily</Link>
                <Link href="#" active>
                    Weekly
                </Link>
                <Link href="#">Monthly</Link>
            </div>
            <p className="font-bold">Friday 14:30</p>
        </header>
    );
};
