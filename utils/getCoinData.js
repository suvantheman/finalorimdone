const headers = ["Date", "Open", "High", "Low", "Close", "Adj", "Volume"];

const processCSV = csv => {
    const lines = [];

    csv.split("\n").forEach(line => {
        const data = {};
        const values = line.split(",");

        for (let i = 0; i < values.length; i++)
            data[headers[i]] = values[i];

        lines.push(data);
    });

    return lines;
};

const getCSVData = async csv => {
    const response = await fetch(`../assets/stock-data/${csv}.txt`);
    const data = await response.text();
    const points = processCSV(data);

    return points;
};

const getCoinData = async (coin, start, end) => {
    const data = await getCSVData(coin);
    const lines = data.length;

    return data.slice(lines - start, lines - end);
}

export default getCoinData;