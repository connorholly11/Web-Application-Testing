import React from 'react'


const Dashboard = (props) => {
    console.log(props)


    return(
        <div className="dashboard">
            <div className="buttons">
                <button onClick={() => props.Strikes()}> Strike </button>
                <button onClick={() => props.Balls()}> Ball </button>
                <button onClick={() => props.Foul()}> Foul </button>
                <button onClick={() => props.Hit()}> HIT </button>
                <button onClick={() => props.Outs()}> Out </button>
            </div>
        </div>
    )
}

export default Dashboard;