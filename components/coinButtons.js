import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";

export default function ({ changeCoinName }) {
    return (
        <div className="CoinButtons">
            <button onClick={changeCoinName}>Ember </button>
            <button onClick={changeCoinName} value="usd">Aqua </button>
            <button onClick={changeCoinName} value="usd">Pheonix</button>
            <button onClick={changeCoinName} value="usd">Quantum</button>
            <button onClick={changeCoinName} value="usd">Zenith</button>
            <button onClick={changeCoinName} value="usd">Nebula</button>
            <button onClick={changeCoinName} value="usd">Aqua</button>
            <button onClick={changeCoinName} value="usd">Harmony</button>
            <button onClick={changeCoinName} value="usd">Celestia</button>
        </div>
    )
}