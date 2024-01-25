export default function App() {
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    const data = [
        { title: "One", value: 10, color: "#E38627" },
        { title: "Two", value: 15, color: "#C13C37" },
        { title: "Three", value: 20, color: "#6A2135" }
    ];

    return (
        <div className="App">
            <PieChart
                data={data}
                segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
                segmentsShift={(index) => (index === selected ? 2 : 0)}
                onMouseOver={(_, index) => {
                    setSelected(index === selected ? undefined : index);
                }}
                onMouseOut={(_, index) => {
                    setSelected(index === selected ? undefined : index);
                }}
                lineWidth={15}
                paddingAngle={4}
            />
        </div>
    );
}
