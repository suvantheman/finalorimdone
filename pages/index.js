import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RadioButton from "@components/RadioButton";
import RadioGroup from "@components/RadioGroup";
import LineChart from "@components/LineChart";
import getPoints from "../utils/graph.js";
import { Button } from "react-bootstrap";

const getCSVData = async (coin) => {
    const response = await fetch(`../assets/stock-data/${coin}.txt`);
    const data = await response.text();
    const points = getPoints(data);

    return points;
};

export default function Home() {
    const [coinState, setCoinState] = useState({
        labels: "Loading",
    
        datasets: [{
            backgroundColor: '#9BD0F5',
            borderColor: '#36A2EB',
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
            const allCoinData = await getCSVData("BTC"); 
            const coinData = allCoinData.slice(allCoinData.length - range, allCoinData.length);
            
            setCoinState({
                labels: coinData.map((line) => line.Date),
    
                datasets: [{
                    backgroundColor: '#9BD0F5',
                    borderColor: '#36A2EB',
                    label: "Value",
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
                    <RadioButton onClick = {changeRange} label="24h" value="2" />
                    <RadioButton onClick = {changeRange} label="7d" value="7" />
                    <RadioButton onClick = {changeRange} label="1m" value="30" />
                    <RadioButton onClick = {changeRange} label="1y" value="365" />
                </RadioGroup>

                <div className="Application">
                    <div style={{ width: 1200 }}>
                        <LineChart chartData={coinState} /> 
                    </div>
                </div>
            </div>
        </>
    )
};