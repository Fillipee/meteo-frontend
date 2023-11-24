import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

export const EditSiteModal = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        localStorage.setItem("darkMode", darkMode === true ? "true" : "false");
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <Dialog>
            <DialogTrigger className="h-fit">Úprava stránky</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nastavení stránky</DialogTitle>
                    <button onClick={toggleDarkMode} className="px-4 py-2 rounded-md bg-gray-800 text-white">
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
