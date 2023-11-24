import { Widget } from "./widget";

export const Widgets = () => {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Widget text="Temperature" value="26°C" active />
            <Widget text="Moisture" value="30%" />
            <Widget text="Pressure" value="980,4 hPa" />
        </section>
    );
};
