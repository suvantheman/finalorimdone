export default {
    borderWidth: 3,
    borderColor: "#228C22",

    backgroundColor: "#9BD0F5",
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