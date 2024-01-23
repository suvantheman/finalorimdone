import Chart from 'chart.js/auto';
import React from "react";
import { Line } from "react-chartjs-2";
import { getMouse } from "../utils/chartMouse.js";

const Y_OFFSET = 247;

const drawLine = (ctx, xStart, xEnd, yStart, yEnd) => {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xEnd, yEnd);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#353636";
    ctx.stroke();
    ctx.restore();
};

const plugins = [{
    afterDraw: (chart) => {
        if (!chart.tooltip) return;
        if (!chart.tooltip._active || !chart.tooltip._active.length) return;

        const ctx = chart.ctx;
        const activePoint = chart.tooltip._active[0];
        const x = activePoint.element.x;
        const mouseY = getMouse().mouseY;

        // Draw vertical line
        const topY = chart.scales.y.top;
        const bottomY = chart.scales.y.bottom;
        drawLine(ctx, x, x, topY, bottomY);

        // Draw horizontal line
        const leftX = chart.scales.x.left;
        const rightX = chart.scales.x.right;
        drawLine(ctx, leftX, rightX, mouseY - Y_OFFSET, mouseY - Y_OFFSET);
    },
}];

function LineChart({ chartData, chartOptions }) {
    return <Line data={chartData} options={chartOptions} plugins={plugins} />;
}

export default LineChart;