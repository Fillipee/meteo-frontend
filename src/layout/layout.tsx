import { Navbar } from "../components/navbar";

type LayoutProps = {
    children: React.ReactNode;
    setStation: React.Dispatch<React.SetStateAction<string>>;
};

const Layout = ({ children, setStation }: LayoutProps) => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Navbar setStation={setStation} />
            <main className="h-full flex flex-col gap-y-4 justify-between mt-4">{children}</main>
        </div>
    );
};

export default Layout;
