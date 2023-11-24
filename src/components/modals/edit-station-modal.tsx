import { Settings } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";

export const EditStationModal = () => {
    return (
        <Dialog>
            <DialogTrigger className="h-fit">
                <Settings className="mt-4 h-6 w-6 cursor-pointer hover:animate-rotate-little" color="#fff" />
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
