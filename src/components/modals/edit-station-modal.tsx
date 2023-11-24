import { Edit } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

type EditStationModal = {
    darkMode: boolean;
};

export const EditStationModal = ({ darkMode }: EditStationModal) => {
    return (
        <Dialog>
            <DialogTrigger className="h-fit">
                <Edit className="h-6 w-6 cursor-pointer" color={darkMode ? "#fff" : "#000"} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Úprava stanice</DialogTitle>
                    <DialogDescription>TEST</DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};
