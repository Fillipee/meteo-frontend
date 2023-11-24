type WidgetProps = {
    text: string;
    value: string;
    active?: boolean;
};

export const Widget = ({ text, value, active }: WidgetProps) => {
    return (
        <div className={`w-full px-6 py-4 rounded-3xl shadow ${active ? "bg-primaryBlue-100" : "bg-white"}`}>
            <p className="font-bold">{text}</p>
            <p className="text-3xl">{value}</p>
            <p></p>
        </div>
    );
};
