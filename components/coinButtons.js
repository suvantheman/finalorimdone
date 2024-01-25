import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";
const Ember = 'Ember';
export default function ({ changeCoinName }) {
    return (
        <div className="CoinButtons">
            <button onClick={changeCoinName} value="EMB">Ember</button>
            <button onClick={changeCoinName} value="AQA">Aqua</button>
            <button onClick={changeCoinName} value="PHX">Pheonix</button>
            <button onClick={changeCoinName} value="QTM">Quantum</button>
            <button onClick={changeCoinName} value="ZTH">Zenith</button>
            <button onClick={changeCoinName} value="NBA">Nebula</button>
            <button onClick={changeCoinName} value="NVA">Nova</button>
            <button onClick={changeCoinName} value="ELE">Electro</button>
            <button onClick={changeCoinName} value="HMY">Harmony</button>
            <button onClick={changeCoinName} value="CST">Celest</button>
            
            
        </div>
    )
}