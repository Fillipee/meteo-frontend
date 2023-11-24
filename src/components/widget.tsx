type WidgetProps = {
    text: string;
    value: string;
    active?: boolean;
};

export const Widget = ({ text, value, active }: WidgetProps) => {
    return (
        <div className={`w-full p-4 rounded-3xl ${active ? "bg-primary-100" : "bg-white"}`}>
            <p className="font-bold">{text}</p>
            <p className="text-3xl">{value}</p>
            <p></p>
        </div>
    );
};
