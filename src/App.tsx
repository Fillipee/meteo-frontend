import { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { Banner } from "./components/banner";
import { Widgets } from "./components/widgets";
import { Chart } from "./components/chart";
import { ChartType, Weather } from "./types/types";
import { socket } from "./socket";

function App() {
    const [station, setStation] = useState<string>("1");
    const [weather, setWeather] = useState<Weather[]>([]);
    const [chartType, setChartType] = useState<ChartType>("temperature");
    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onWeatherEvent(value: Weather[]) {
            console.log(value);
            setWeather(value);
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("weather", onWeatherEvent);

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("weather", onWeatherEvent);
        };
    }, []);

    return (
        <div className="bg-primaryBlue-50 min-h-screen h-full p-4">
            <Layout station={station} setStation={setStation}>
                <Banner weather={weather} />
                <Widgets chartType={chartType} setChartType={setChartType} />
                <Chart weather={weather} chartType={chartType} />
            </Layout>
        </div>
    );
}

export default App;
