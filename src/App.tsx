import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout/layout";
import { Banner } from "./components/banner";
import { Widgets } from "./components/widgets";
import { Chart } from "./components/chart";
import { Weather } from "./types/types";
import { socket } from "./socket";

function App() {
    const [station, setStation] = useState<string>("1");
    const [weather, setWeather] = useState<Weather[]>([]);
    const [isConnected, setIsConnected] = useState(socket.connected);

    // useEffect(() => {
    // axios;
    // .get("http://10.74.5.224:8000/api/v1/weather")
    // .then((res) => {
    //     console.log(res.data);
    //     setData(res.data);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
    // }, []);

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
            <Layout setStation={setStation}>
                <Banner />
                <Widgets />
                <Chart weather={weather}/>
            </Layout>
        </div>
    );
}

export default App;
