import React, {useState} from 'react'


const Dashboard = () => {

    const [balls, setBalls] = useState(0);
    const [strikes, setStrikes] = useState(0);

    const clearState = () => {
        setBalls(0);
        setStrikes(0);
    }

    const Strikes = () => {
        if (strikes < 2){
            setStrikes(strikes + 1)
        }else{
            clearState()
        }
    }

    const Balls = () => {
        if (balls < 3){
            setBalls(balls + 1)
        }else{
            clearState()
        }
    }

    const Foul = () => {
        if (strikes < 2){
            setStrikes(strikes + 1)
        }else if(strikes === 2){
            setStrikes(strikes + 0)
        }
    }
    return(
        <div>
            <h1>I AM Dashboard</h1>
            <h3>Strikes: {strikes}</h3>
            <h3>Balls: {balls}</h3>
            <div className="buttons">
                <button onClick={() => {Strikes()}}> Strike </button>
                <button onClick={() => {Balls()}}> Ball </button>
                <button onClick={() => {Foul()}}> Foul </button>
                <button onClick={() => clearState()}> HIT </button>
            </div>
        </div>
    )
}

export default Dashboard;