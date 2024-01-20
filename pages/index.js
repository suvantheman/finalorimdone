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

    const [baseRange, setBaseRange] = useState(2);
    const [startRange, setStartRange] = useState(2);
    const [endRange, setEndRange] = useState(0);

    const changeBaseRange = event => {
        const value = event.target.getAttribute("data-value");

        setBaseRange(value);
        setStartRange(value);
        setEndRange(0);
    };

    const incrementRange = event => {
        const delta = event.target.getAttribute("value");
        const distances = {
            365: 30,
            30: 7,
            7: 1,
            2: 1
        }

        const distance = distances[baseRange];
        setStartRange(Math.max(startRange - (distance * delta), baseRange))
        setEndRange(Math.max(endRange - (distance * delta), baseRange - startRange));
    };

    useEffect(() => {
        const asyncWrapper = async () => {
            const coinData = await getCoinData("BTC", startRange, endRange);
            const prices = coinData.map((line) => line.Close);
            const positive = (prices[prices.length - 1] - prices[0]) >= 0;

            setCoinState({
                labels: coinData.map(line => ""),

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
    }, [startRange, endRange]);

    return (
        <>
            <Header title="Edu-Crypto" />

            <div className="container">
                <h3>Bitcoin Price Chart (BTC)</h3>

                <div className="controls">
                    <RadioGroup checkedValue="24h">
                        <RadioButton onClick={changeBaseRange} label="24h" value="2" />
                        <RadioButton onClick={changeBaseRange} label="7d" value="7" />
                        <RadioButton onClick={changeBaseRange} label="1m" value="30" />
                        <RadioButton onClick={changeBaseRange} label="1y" value="365" />
                    </RadioGroup>

                    <div className="prev-next-buttons">
                        <button onClick={incrementRange} value="-1">Prev</button>
                        <button onClick={incrementRange} value="1">Next</button>
                    </div>
                </div>

                <div className="chart" onMouseMove={setMouse}>
                    <LineChart chartData={coinState} chartOptions={chartOptionsConfig} />


                    <Table data={{
                        headers: ["24h", "7d", "1m", "1y"],
                        rows: [["0.4%", "-1.4%", "-10.7%", "-7.3%"]]
                    }} />
                </div>
            </div>
        </>
    )
};