import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";

export default function ({ baseRanges, changeBaseRange, incrementRange }) {
    return (
        <div className="controls">
            <RadioGroup checkedValue="24h">
                {baseRanges.map(range => (
                    <RadioButton onClick={changeBaseRange} label={range[0]} value={range[1]} />
                ))}
            </RadioGroup>

            <div className="prev-next-buttons">
                <button onClick={incrementRange} value="-1">Prev</button>
                <button onClick={incrementRange} value="1">Next</button>
            </div>
        </div>
    )
}