import { SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Switch } from "../ui/switch";
import { Settings } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

type EditSiteModalProps = {
    temperatureUnit: string;
    setTemperatureUnit: React.Dispatch<SetStateAction<string>>;
    darkMode: boolean;
    setDarkMode: React.Dispatch<SetStateAction<boolean>>;
    pressureUnit: string;
    setPressureUnit: React.Dispatch<SetStateAction<string>>;
};

export const EditSiteModal = ({
    temperatureUnit,
    setTemperatureUnit,
    darkMode,
    setDarkMode,
    pressureUnit,
    setPressureUnit,
}: EditSiteModalProps) => {
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
                        <p className="text-xl mb-4 text-left">Temperature units</p>
                        <RadioGroup
                            defaultValue="c"
                            value={temperatureUnit}
                            onValueChange={(value) => {
                                setTemperatureUnit(value);
                                localStorage.setItem("temperatureUnit", value);
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
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="k" id="k" />
                                <Label htmlFor="k" className="text-md">
                                    Kelvin (K)
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="pt-4">
                        <p className="text-xl mb-4 text-left">Pressure units</p>
                        <RadioGroup
                            defaultValue="c"
                            value={pressureUnit}
                            onValueChange={(value) => {
                                setPressureUnit(value);
                                localStorage.setItem("pressureUnit", value);
                            }}
                        >
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="pa" id="pa" />
                                <Label htmlFor="pa" className="text-md">
                                    Pascals (Pa)
                                </Label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="hpa" id="hpa" />
                                <Label htmlFor="hpa" className="text-md">
                                    Hectopascals (hPa)
                                </Label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <RadioGroupItem value="kpa" id="kpa" />
                                <Label htmlFor="kpa" className="text-md">
                                    Kilopascals (kPa)
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
