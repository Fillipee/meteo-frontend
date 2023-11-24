import { Navbar } from "../components/navbar";

type LayoutProps = {
    children: React.ReactNode;
    station: string;
    setStation: React.Dispatch<React.SetStateAction<string>>;
    period: string;
    setPeriod: React.Dispatch<React.SetStateAction<string>>;
};

const Layout = ({ children, station, setStation, period, setPeriod }: LayoutProps) => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Navbar station={station} setStation={setStation} period={period} setPeriod={setPeriod} />
            <main className="h-full flex flex-col gap-y-4 justify-between mt-4">{children}</main>
        </div>
    );
};

export default Layout;
