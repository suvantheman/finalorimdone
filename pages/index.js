import { useState, useEffect, useRef } from "react";
import Header from "@components/Header";
import Table from "@components/Table";
import RadioButton from "@components/RadioButton";
import RadioGroup from "@components/RadioGroup";
import LineChart from "@components/LineChart";
import getCoinData from "../utils/getCoinData.js";
import chartOptionsConfig from "../utils/chartOptionsConfig.js";
import chartConfig from "../utils/chartConfig.js";
import { setMouse } from "../utils/chartMouse.js";

export default function Home() {
    const [coinState, setCoinState] = useState({
        labels: "Loading",
        backgroundColor: "#9BD0F5",
        datasets: [{}]
    });

    const [range, setRange] = useState(2);

    const changeRange = event => {
        const value = event.target.getAttribute("data-value");
        setRange(value);
    };


    useEffect(() => {
        const asyncWrapper = async () => {
            const coinData = await getCoinData("BTC", range);
            const prices = coinData.map((line) => line.Close);
            const positive = (prices[prices.length - 1] - prices[0]) >= 0;

            setCoinState({
                labels: new Array(coinData.length).fill(""),

                datasets: [{
                    label: "Price",
                    pointColor: chartConfig.pointColor,
                    pointStrokeColor: chartConfig.pointStrokeColor,
                    borderColor: chartConfig.borderColor[positive],
                    color: chartConfig.color,
                    fill: "start",
                    pointRadius: 0,

                    backgroundColor: canvas => {
                        const context = canvas.chart.ctx;
                        const gradient = context.createLinearGradient(0, 0, 0, context.canvas.clientWidth);

                        chartConfig.backgroundColor[positive](gradient);

                        return gradient;
                    },

                    data: prices
                }]
            });
        };

        asyncWrapper();
    }, [range]);

    return (
        <>
            <Header title="Edu-Crypto" />

            <h3>Bitcoin Price Chart (BTC)</h3>

            <RadioGroup checkedValue="24h">
                <RadioButton onClick={changeRange} label="24h" value="2" />
                <RadioButton onClick={changeRange} label="7d" value="7" />
                <RadioButton onClick={changeRange} label="1m" value="30" />
                <RadioButton onClick={changeRange} label="1y" value="365" />
            </RadioGroup>

            <div onMouseMove={setMouse}>
                <LineChart chartData={coinState} chartOptions={chartOptionsConfig} />
            </div>

            <Table data={{
                headers: ["24h", "7d", "1m", "1y"],
                rows: [["0.4%", "-1.4%", "-10.7%", "-7.3%"]]
            }} />
        </>
    )
};