import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";


export default function ({ baseRanges, changeBaseRange, incrementRange, datachange}) {
    return (
    
        <div className="CoinButtons">
            

            
           
                <button onClick={datachange}><img src={require('../public/assets/EmberCoin.png').default} />Ember </button>
                <button onClick={incrementRange} value="1"><img src={require('../public/assets/EmberCoin.png').default} />Aqua </button>
                <button onClick={incrementRange} value="1">Pheonix</button>
                <button onClick={incrementRange} value="1">Quantum</button>
                <button onClick={incrementRange} value="1">Zenith</button>
                <button onClick={incrementRange} value="1">Nebula</button>
                <button onClick={incrementRange} value="1">Aqua</button>
                <button onClick={incrementRange} value="1">Harmony</button>
                <button onClick={incrementRange} value="1">Celestia</button>

            </div>
        
    )
}

      
