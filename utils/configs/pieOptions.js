export default {
    interaction: {
        intersect: false,
        responsive: true,
        mode: "index",
    },

    plugins: {
        legend: {
            display: false
        }
    },

    scales: {
        x: {
            ticks: {
                display: false,
            },

            grid: {
                display: false
            }
        },
        y: {
            ticks: {
                display: false,
            },

            grid: {
                display: false,
            },

            display: false,
            position: 'right',
            ticks: {
                display: false,
                color: "white",
            }
        }
    },

    maintainAspectRatio: false
};