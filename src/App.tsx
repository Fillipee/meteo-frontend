import { useEffect, useState } from "react";
import Layout from "./layout/layout";
import { Banner } from "./components/banner";
import { Widgets } from "./components/widgets";
import { Chart } from "./components/chart";
import { ChartType, ChartValues, Station, Weather } from "./types/types";
import { socket } from "./socket";
import axios from "axios";
import { Helmet } from "react-helmet";

function App() {
    const localStation = localStorage.getItem("stationId") ? localStorage.getItem("stationId") : "";
    const [station, setStation] = useState<string>(localStation ? localStation : "");
    const [stations, setStations] = useState<Station[]>([]);

    const [weather, setWeather] = useState<Weather>(null);
    const [chartType, setChartType] = useState<ChartType>("temperature");
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [period, setPeriod] = useState<string>("weekly");

    const localTemperatureUnit = localStorage.getItem("temperatureUnit")
        ? localStorage.getItem("temperatureUnit")
        : "c";
    const [temperatureUnit, setTemperatureUnit] = useState(localTemperatureUnit ? localTemperatureUnit : "c");

    const localPressureUnit = localStorage.getItem("pressureUnit")
        ? localStorage.getItem("pressureUnit")
        : "kpa";
    const [pressureUnit, setPressureUnit] = useState<string>(localPressureUnit ? localPressureUnit : "kpa");

    const [chartValues, setChartValues] = useState<ChartValues>({
        min: [],
        max: [],
        mean: [],
        time: [],
    });

    useEffect(() => {
        if (station && chartType) {
            axios.get(`http://10.74.5.224:8000/api/v1/${period}/${station}/${chartType}`).then((res) => {
                setChartValues(res.data);
            });
        }
    }, [period, chartType, station]);

    useEffect(() => {
        axios.get(`http://10.74.5.224:8000/api/v1/stations`).then((res) => {
            setStations(res.data);
            setStation(res.data[0].id);
            localStorage.setItem("stationId", res.data[0].id);
        });

        function onConnect() {
            setIsConnected(true);
        }

        function onDisconnect() {
            setIsConnected(false);
        }

        function onWeatherEvent(value: Weather) {
            const stat = localStorage.getItem("stationId");
            if (stat && parseInt(stat) === value?.stationId) {
                setWeather(value);
            }
        }

        socket.on("connect", onConnect);
        socket.on("disconnect", onDisconnect);
        socket.on("weather", (value) => onWeatherEvent(value));

        return () => {
            socket.off("connect", onConnect);
            socket.off("disconnect", onDisconnect);
            socket.off("weather", onWeatherEvent);
        };
    }, []);

    return (
        <div className="bg-primaryBlue-50 dark:bg-primaryBlue-900 min-h-screen h-full p-4">
            <Helmet>
                <title>UPtime</title>
            </Helmet>
            <Layout station={station} setStation={setStation} stations={stations} darkMode={darkMode}>
                <Banner
                    weather={weather}
                    temperatureUnit={temperatureUnit}
                    setTemperatureUnit={setTemperatureUnit}
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                    pressureUnit={pressureUnit}
                    setPressureUnit={setPressureUnit}
                    station={station}
                />
                <Widgets
                    weather={weather}
                    chartType={chartType}
                    setChartType={setChartType}
                    pressureUnit={pressureUnit}
                    temperatureUnit={temperatureUnit}
                    darkMode={darkMode}
                />
                <Chart
                    chartType={chartType}
                    chartValues={chartValues}
                    period={period}
                    setPeriod={setPeriod}
                />
            </Layout>
        </div>
    );
}

export default App;
