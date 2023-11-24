import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./layout/layout";
import { Banner } from "./components/banner";
import { Widgets } from "./components/widgets";
import { Chart } from "./components/chart";

function App() {
    // const [data, setData] = useState<{ message: string } | null>(null);

    // useEffect(() => {
    //     axios
    //         .post("http://10.74.5.224:8000/api/add", {
    //             email: "TEST@TESTDFFDDdddasasdssdF.cz",
    //             name: "TE|ST",
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         });
    // }, []);

    return (
        <div className="bg-primaryBlue-50 min-h-screen h-full p-4">
            <Layout>
                <Banner />
                <Widgets />
                <Chart />
            </Layout>
        </div>
    );
}

export default App;
