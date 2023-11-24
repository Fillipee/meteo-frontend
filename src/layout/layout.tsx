import { Navbar } from "../components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1024px] mx-auto">
            <Navbar />
            <main className="h-full flex flex-col gap-y-4 justify-between mt-4">{children}</main>
        </div>
    );
};

export default Layout;
