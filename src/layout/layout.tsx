import { Station } from "@/types/types";
import { Navbar } from "../components/navbar";

type LayoutProps = {
    children: React.ReactNode;
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
    darkMode: boolean;
    stations: Station[];
};

const Layout = ({ children, station, setStation, darkMode, stations }: LayoutProps) => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Navbar station={station} setStation={setStation} darkMode={darkMode} stations={stations} />
            <main className="h-full flex flex-col gap-y-4 justify-between mt-4">{children}</main>
        </div>
    );
};

export default Layout;
