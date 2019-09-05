import React from 'react';

const Display = (props) => {
    

    return(
        <div>
            <h1>I AM DISPLAY</h1>
            <h3>Strikes: {props.strikes}</h3>
            <h3>Balls: {props.balls}</h3>
        </div>
    )
}

export default Display;