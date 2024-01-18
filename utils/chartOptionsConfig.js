export default {
    interaction: {
        intersect: false,
        mode: 'index',
    },
    plugins: {
        title: {
            display: true,
            text: (ctx) => {
                const { axis = 'xy', intersect, mode } = ctx.chart.options.interaction;
                return 'Mode: ' + mode + ', axis: ' + axis + ', intersect: ' + intersect;
            }
        },
    }
};