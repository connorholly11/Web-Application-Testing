import React from 'react';

const Display = (props) => {
    console.log(props)
    

    return(
        <div className="display">
            <h3 className="displaystat">Strikes: </h3>
                <div>{props.strikes}</div>
            <h3 className="displaystat">Balls: </h3>
                <div>{props.balls}</div>
            <h3 className="displaystat">Outs: </h3>
                <div>{props.outs}</div>
        </div>
    )
}

export default Display;