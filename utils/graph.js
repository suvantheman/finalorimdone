const headers = {
    "Date": 10,
    "Open": 12,
    "High": 12,
    "Low": 12,
    "Close": 12,
    "Adj": 12,
    "Volume": 11
};

const getPoints = csv => {
    const points = [];

    csv.split("\n").forEach(line => {
    const data = {};
        let i = 0;

        for (const [header, gap] of Object.entries(headers)) {
            data[header] = line.substring(i, i + gap);
            i += gap + 1; 
        }

        points.push(data);
    });

    return points;  
};

export default getPoints;