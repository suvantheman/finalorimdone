import { useState, useEffect, useRef } from "react";
import Header from "@components/Header";
import RadioButton from "@components/RadioButton";
import RadioGroup from "@components/RadioGroup";
import LineChart from "@components/LineChart";
import getCoinData from "../utils/getCoinData.js";
import chartOptionsConfig from "../utils/chartOptionsConfig.js";

export default function Home() {
    const [coinState, setCoinState] = useState({
        labels: "Loading",

        datasets: [{
            backgroundColor: '#9BD0F5',
            borderColor: '#228C22',
            borderWidth: 3,
            label: "Value",
            data: [0]
        }]
    });

    const [range, setRange] = useState(2);

    const changeRange = event => {
        const value = event.target.getAttribute("data-value");
        setRange(value);
    };

    useEffect(() => {
        const asyncWrapper = async () => {
            const coinData = await getCoinData("BTC", range);

            setCoinState({
                labels: (new Array(coinData.length).fill("")),

                datasets: [{
                    label: "Value",
                    pointColor: "rgba(0, 0, 0, 0)",
                    pointStrokeColor: "rgba(0, 0, 0, 0)",
                    borderColor: "#228C22",
                    fill: "start",
                    pointRadius: 0,

                    backgroundColor: canvas => {
                        const context = canvas.chart.ctx;

                        const gradient = context.createLinearGradient(0, 0, 0, context.canvas.clientWidth);
                        gradient.addColorStop(0, "rgba(0, 250, 50, 0.3)");
                        gradient.addColorStop(0.43, "rgba(0, 174, 50, 0)");

                        return gradient;
                    },

                    data: coinData.map((line) => line.Close),
                }]
            });
        };

        asyncWrapper();
    }, [range]);

    return (
        <>
            <div>
                <Header title="Edu-Crypto" />

                <h3>Bitcoin Price Chart (BTC)</h3>

                <RadioGroup label="time" checkedValue="24h">
                    <RadioButton onClick={changeRange} label="24h" value="2" />
                    <RadioButton onClick={changeRange} label="7d" value="7" />
                    <RadioButton onClick={changeRange} label="1m" value="30" />
                    <RadioButton onClick={changeRange} label="1y" value="365" />
                </RadioGroup>

                <div className="Application">
                    <div style={{ width: 1200 }}>
                        <LineChart chartData={coinState} chartOptions={chartOptionsConfig} />
                    </div>
                </div>
            </div>
        </>
    )
};