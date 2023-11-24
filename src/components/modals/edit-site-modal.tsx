import { SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Switch } from "../ui/switch";
import { Settings } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type EditSiteModalProps = {
    isCelsius: boolean;
    setIsCelsius: React.Dispatch<SetStateAction<boolean>>;
};

export const EditSiteModal = ({ isCelsius, setIsCelsius }: EditSiteModalProps) => {
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
                    <div className="pt-4">
                        <p className="text-xl mb-4">Temperature units</p>
                        <RadioGroup
                            defaultValue="c"
                            value={isCelsius ? "c" : "f"}
                            onValueChange={(value) => {
                                setIsCelsius(value === "c");
                                localStorage.setItem("isCelsius", value === "c" ? "true" : "false");
                            }}
                        >
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="c" id="c" />
                                <Label htmlFor="c" className="text-md">
                                    Celsius (°C)
                                </Label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="f" id="f" />
                                <Label htmlFor="f" className="text-md">
                                    Fahrenheit (F°)
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
