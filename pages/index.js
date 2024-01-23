import { useState, useEffect, useRef } from "react";
import Table from "@components/Table";
import Controls from "@components/Controls";
import coinButtons from "@components/coinButtons.js";
import LineChart from "@components/LineChart";
import getCoinData from "../utils/getCoinData.js";
import chartOptionsConfig from "../utils/configs/chartOptions.js";
import chartConfig from "../utils/configs/chart.js";
import { setMouse } from "../utils/chartMouse.js";
import BarChart from "@components/BarChart.js";
import baseRanges from "utils/configs/baseRanges.js";
import { PieChart } from "react-minimal-pie-chart";
import CoinButtons from "@components/coinButtons.js";

export default function Home() {
    const [coinState, setCoinState] = useState({
        labels: ["Loading"],
        backgroundColor: "#9BD0F5",
        datasets: [{}]
    });
    const [dataPieState, setDataPieState] = useState({
        labels: ['1 BTC', '5 DOT', '10 ETH'],
        backgroundColor: "#9BD0F5",
        datasets: [{
            label: "test",
            data: [1, 3, 5]
        }]
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
            const isPositive = (prices[prices.length - 1] - prices[0]) >= 0;

            setCoinState(chartConfig(prices, isPositive));
        };

        asyncWrapper();
    }, [startRange, endRange]);

    return (
        <>
            <div className="container">
                <div className="left-UI">
                
                <CoinButtons changeBaseRange={changeBaseRange} incrementRange={incrementRange} baseRanges={baseRanges} />

                
                </div>
                <div className="center-UI">
                    <h3>Bitcoin Price Chart (BTC)</h3>

                    <Controls changeBaseRange={changeBaseRange} incrementRange={incrementRange} baseRanges={baseRanges} />

                    <div className="chart" onMouseMove={setMouse}>
                        <LineChart chartData={coinState} chartOptions={chartOptionsConfig} />
                    </div>

                    <div className="graph-info">
                        <Table data={{
                            headers: ["24h", "7d", "1m", "1y"],
                            rows: [["0.4%", "-1.4%", "-10.7%", "-7.3%"]],

                        }} />
                    </div>
                </div>

                <div className="right-UI"><div className="bar-chart">
                    <BarChart chartData={coinState} chartOptions={chartOptionsConfig} />

            
                </div>
                    

                        <h1 className="myportfolio">  My Portfolio:</h1>


                    
                
                <div className="PieChart">
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },

                        ]}
                        lineWidth={15}
                        radius={30}
                        animate
                        reveal={100}




                        valueFormatter={(value, percentage) => `${value} (${percentage}%)`}></PieChart>
                    </div>


            </div>
        </div >
        </>
    )
};