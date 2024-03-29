const chartConfig = {
    borderWidth: 3,

    pointColor: "rgba(0, 0, 0, 0)",
    pointStrokeColor: "rgba(0, 0, 0, 0)",
    color: "#ffffff",

    borderColor: {
        [true]: "#228C22", // Positive  
        [false]: "#C21807" // Negative 
    },

    backgroundColor: {
        // Positive 
        [true]: (gradient) => {
            gradient.addColorStop(0, "rgba(0, 250, 50, 0.3)");
            gradient.addColorStop(0.43, "rgba(0, 174, 50, 0)");
        },

        // Negative 
        [false]: (gradient) => {
            gradient.addColorStop(0, "rgba(250, 0, 20, 0.3)");
            gradient.addColorStop(0.43, "rgba(250, 0, 0, 0)");
        }
    }
}

export default function (prices, isPositive) {
    return {
        labels: new Array(prices.length).fill(""),
        datasets: [{
            label: "Price",
            pointColor: chartConfig.pointColor,
            pointStrokeColor: chartConfig.pointStrokeColor,
            borderColor: chartConfig.borderColor[isPositive],
            color: chartConfig.color,
            fill: "start",
            pointRadius: 0,

            backgroundColor: canvas => {
                const context = canvas.chart.ctx;
                const gradient = context.createLinearGradient(0, 0, 0, context.canvas.clientWidth);

                chartConfig.backgroundColor[isPositive](gradient);

                return gradient;
            },

            data: prices
        }]
    }
}