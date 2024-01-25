import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";
const Ember = 'Ember';
export default function ({ changeCoinName }) {
    return (
        <div className="CoinButtons">
            <button onClick={changeCoinName} value="btc">Ember</button>
            <button onClick={changeCoinName} value="dot">Aqua</button>
            <button onClick={changeCoinName} value="eth">Pheonix</button>
            <button onClick={changeCoinName} value="bnb">Quantum</button>
            <button onClick={changeCoinName} value="usd">Zenith</button>
            <button onClick={changeCoinName} value="usd">Nebula</button>
            <button onClick={changeCoinName} value="usd">Aqua</button>
            <button onClick={changeCoinName} value="usd">Harmony</button>
            <button onClick={changeCoinName} value="usd">Celestia</button>
        </div>
    )
}