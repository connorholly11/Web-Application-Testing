import React, {useState} from 'react';

const Display = () => {
    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const clearState = () => {
        setBalls(0);
        setStrikes(0);
    }

    return(
        <div>
            <h1>I AM DISPLAY</h1>
            <h3>Strikes: {strikes}</h3>
            <h3>Balls: {balls}</h3>
            <div className="buttons">
                <button onClick={() => setStrikes(strikes + 1)}
                
                > Strike </button>
                <button onClick={() => setBalls(balls + 1)}> Ball </button>
                <button onClick={() => setStrikes(strikes + 1)}> Foul </button>
                <button onClick={() => clearState()}> HIT </button>
            </div>
        </div>
    )
}

export default Display;