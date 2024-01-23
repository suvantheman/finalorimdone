import React from "react";
import RadioButton from "./RadioButton";
import RadioGroup from "./RadioGroup";


export default function ({ baseRanges, changeBaseRange, incrementRange }) {
    return (
    
        <div className="CoinButtons">
            

            
                <button onClick={incrementRange} value="-1">Aqua Coin</button>
                <button onClick={incrementRange} value="1">Next</button>
                <button onClick={incrementRange} value="1">Next</button>
                <button onClick={incrementRange} value="1">Next</button>
                <button onClick={incrementRange} value="1">Next</button>
                <button onClick={incrementRange} value="1">Next</button>
                <button onClick={incrementRange} value="1">Next</button>

            </div>
        
    )
}

      
