import React from 'react';

const Display = (props) => {
    console.log(props)
    

    return(
        <div className="display">
            <div className="stat">
                <h3>Strikes: </h3>
                    <div>{props.strikes}</div>
                <h3>Balls: </h3>
                    <div>{props.balls}</div>
                <h3>Outs: </h3>
                    <div>{props.outs}</div>
                <h3>Inning</h3>
                    <div>{props.inning}</div>
            </div>
        </div>
    )
}

export default Display;