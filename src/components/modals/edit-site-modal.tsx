import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import { Switch } from "../ui/switch";
import { Settings } from "lucide-react";

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

    return (
        <Dialog>
            <DialogTrigger className="h-fit">
                <Settings className="mt-4 h-6 w-6 cursor-pointer hover:animate-rotate-little" color="#fff" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nastavení stránky</DialogTitle>
                    <div className="pt-8 flex gap-x-4 items-center">
                        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
                        Dark Mode
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
