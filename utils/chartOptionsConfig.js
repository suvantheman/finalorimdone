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
                display: false
            },

            ticks: {
                callback: value => "$" + value
            }
        }
    }
};