export default {
    interaction: {
        intersect: false,
        responsive: true,
        mode: "index",
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
                color: '#262626',
            },

            ticks: {
                callback: value => "$" + value,
                beginAtZero: true,
                color: 'white',
                fontSize: 12,

            }
        }
    }
};
