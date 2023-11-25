import { Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import axios from "axios";

type AddStationModal = {
    darkMode: boolean;
};

export const AddStationModal = ({ darkMode }: AddStationModal) => {
    const [name, setName] = useState<string>("");
    const [ip, setIp] = useState<string>("");

    const handleSubmit = () => {
        axios
            .post(`http://10.74.5.224:8000/api/v1/station`, {
                name: name,
                uri: ip,
            })
            .then((res) => {
                setName("");
                setIp("");
                window.location.reload();
            });
    };

    return (
        <Dialog>
            <DialogTrigger className="h-fit">
                <Plus className="h-6 w-6 cursor-pointer" color={darkMode ? "#fff" : "#000"} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="mb-4">Přidání stanice</DialogTitle>
                    <Label htmlFor="name" className="text-left">
                        Name
                    </Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} id="name" />

                    <Label htmlFor="ip" className="text-left">
                        IP
                    </Label>
                    <Input value={ip} onChange={(e) => setIp(e.target.value)} id="ip" />

                    <button
                        onClick={handleSubmit}
                        className="w-fit ml-auto mt-4 border-2 border-primaryBlue-300 hover:bg-primaryBlue-100 dark:hover:bg-primaryBlue-400 transition-colors duration-200 rounded-2xl p-2"
                    >
                        Add
                    </button>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
