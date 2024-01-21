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
            grid: {
                display: false
            }
        },
        y: {
            grid: {
                display: true,
                color: "#262626",

            },
            position: 'right',
            ticks: {
                callback: value => "$" + value,
                beginAtZero: true,
                color: "white",
                fontSize: 12,
            }
        }
    }, maintainAspectRatio: false
};


