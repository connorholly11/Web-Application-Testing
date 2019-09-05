import React from 'react'


const Dashboard = (props) => {


    return(
        <div>
            <h1>I AM Dashboard</h1>
            <div className="buttons">
                <button onClick={() => props.Strikes()}> Strike </button>
                <button onClick={() => props.Balls()}> Ball </button>
                <button onClick={() => props.Foul()}> Foul </button>
                <button onClick={() => props.clearState()}> HIT </button>
            </div>
        </div>
    )
}

export default Dashboard;