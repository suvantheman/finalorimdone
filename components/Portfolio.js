import React from "react";
import { Pie } from 'react-chartjs-2';
import "./Portfolio.module.css";

export default function ({ dataPieState }) {
    return (
        <div className="pie-chart">
            <h2> Your Portfolio:</h2>

            <Pie data={dataPieState}  />
        </div>
    )
};