import React, {useState} from 'react';
import './App.scss';
import Display from './components/Display';
import Dashboard from './components/Dashboard';
// import Soxlogocircle from './Photos/'
// import Soxlogo from './Photos/soxlogo.jpg';

function App() {
  
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);
  const [hit, setHit] = useState(0);
  const [inning, setInning] = useState(1);

  const clearState = () => {
      setBalls(0);
      setStrikes(0);
      if (outs < 2){
        setOuts(outs + 1)
      }else{
        setOuts(0);
        setInning(inning + 1)
      }
  }

  const Strikes = () => {
      if (strikes < 2){
          setStrikes(strikes + 1)
      }else{
          clearState()
          console.log('strikeout')
      }
  }

  const Balls = () => {
      if (balls < 3){
          setBalls(balls + 1)
      }else{
          setBalls(0);
          setStrikes(0);
          console.log('walk')
      }
  }

  const Foul = () => {
      if (strikes < 2){
          setStrikes(strikes + 1)
      }else if(strikes === 2){
          setStrikes(strikes + 0)
      }
  }

  const Outs = () => {
    if (outs < 2){
      setOuts(outs + 1)
      setStrikes(0);
      setBalls(0);
      console.log('out')
    }else{
      clearState();
    }
  }

  const Hit = () => {
    setHit(hit + 1)
    setStrikes(0)
    setBalls(0)
    console.log('hit')
  }

  
  return (
    <div className="scoreboard">
      <Display balls={balls} strikes={strikes} outs={outs} inning={inning}/>
      <div className="dashboardbuttons">
        <Dashboard clearState={clearState} Strikes={Strikes} Balls={Balls} Foul={Foul} Outs={Outs} Hit={Hit}/>
      </div>
    </div>
  );
}

export default App;
