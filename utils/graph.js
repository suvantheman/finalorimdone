const headers = ["Date", "Open", "High", "Low", "Close", "Adj", "Volume"];

const getPoints = csv => {
    const points = [];

    csv.split("\n").forEach(line => {
        const data = {};
        const values = line.split(",");

        for (let i = 0; i < values.length; i++)  
            data[headers[i]] = values[i];

        points.push(data);
    });

    return points;  
};

export default getPoints;