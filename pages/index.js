import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import RadioButton from "@components/RadioButton";
import RadioGroup from "@components/RadioGroup";

import getPoints from "../utils/graph.js";
import { Button } from "react-bootstrap";

const getCSVData = async (coin) => {
    const response = await fetch(`../assets/stock-data/${coin}.txt`);
    const data = await response.text();
    const points = getPoints(data);

    return JSON.stringify(points);
};

export default function Home() {
    const [csv, setCSV] = useState("");

    useEffect(() => {
        const update = async () => setCSV(await getCSVData("BTC"));
        update();
    }, []);

    return (
        <>
            <div>
                <Header title="Educrypto" />

                <h3>Bitcoin Price Chart (BTC)</h3>
                <RadioGroup label="time" checkedValue="24h">
                    <RadioButton label="24h" value="24h" />
                    <RadioButton label="7d" value="7d" />
                    <RadioButton label="1m" value="1m" />
                    <RadioButton label="1y" value="1y" />
                </RadioGroup>
        
                <div>
                    <p></p>
                </div>
            </div>
        </>
    )
};