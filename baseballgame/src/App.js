import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

function App() {
  
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [outs, setOuts] = useState(0);

  const clearState = () => {
      setBalls(0);
      setStrikes(0);
      setOuts(0);
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

  const Outs = () => {
    if (outs < 2){
      setOuts(outs + 1)
    }else{
      clearState();
    }
  }
  
  return (
    <div className="App">
      <Display balls={balls} strikes={strikes} outs={outs}/>
      <Dashboard clearState={clearState} Strikes={Strikes} Balls={Balls} Foul={Foul} Outs={Outs}/>
    </div>
  );
}

export default App;
