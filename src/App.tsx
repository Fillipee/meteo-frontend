import { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { Banner } from "./components/banner";
import { Widgets } from "./components/widgets";
import { Chart } from "./components/chart";
import { ChartType, ChartValues, Weather } from "./types/types";
import { socket } from "./socket";
import axios from "axios";

function App() {
    const [station, setStation] = useState<string>("");
    const [stations, setStations] = useState<{ name: string | null; id: number }[]>([]);

    const [weather, setWeather] = useState<Weather[]>([]);
    const [chartType, setChartType] = useState<ChartType>("temperature");
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const localTemperatureUnit = localStorage.getItem("temperatureUnit")
        ? localStorage.getItem("temperatureUnit")
        : "kpa";
    const [temperatureUnit, setTemperatureUnit] = useState(localTemperatureUnit ? localTemperatureUnit : "c");

    const localPressureUnit = localStorage.getItem("pressureUnit")
        ? localStorage.getItem("pressureUnit")
        : "kpa";
    const [pressureUnit, setPressureUnit] = useState<string>(localPressureUnit ? localPressureUnit : "kpa");

    const [chartValues, setChartValues] = useState<ChartValues>({
        // min: [10, 30, 40, 50],
        // max: [50, 60, 70, 90],
        // mean: [30, 40, 60, 70],
        // time: [new Date(), new Date(), new Date(), new Date()],
        min: [],
        max: [],
        mean: [],
        time: [],
    });

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onWeatherEvent(value: Weather[]) {
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

    useEffect(() => {
        axios.get(`http://10.74.5.224:8000/api/v1/daily/temperatures`).then((res) => {
            console.log(res.data);
        });
    }, []);

    useEffect(() => {
        axios.get(`http://10.74.5.224:8000/api/v1/stations`).then((res) => {
            setStations(res.data);
            setStation(res.data[0].id);
        });
    }, []);

    return (
        <div className="bg-primaryBlue-50 dark:bg-primaryBlue-900 min-h-screen h-full p-4">
            <Layout station={station} setStation={setStation} darkMode={darkMode} stations={stations}>
                <Banner
                    weather={weather}
                    temperatureUnit={temperatureUnit}
                    setTemperatureUnit={setTemperatureUnit}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    pressureUnit={pressureUnit}
                    setPressureUnit={setPressureUnit}
                />
                <Widgets
                    weather={weather}
                    chartType={chartType}
                    setChartType={setChartType}
                    pressureUnit={pressureUnit}
                    temperatureUnit={temperatureUnit}
                />
                <Chart chartType={chartType} chartValues={chartValues} />
            </Layout>
        </div>
    );
}

export default App;
