import React from 'react'


const Dashboard = (props) => {
    console.log(props)


    return(
        <div>
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