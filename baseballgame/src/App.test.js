import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Strikes, clearState, Balls, Foul} from './components/Dashboard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('to see if strikes fuction is working', () => {
  it('adds strikes and then resets it at 3', () =>{
    expect(Strikes(1).toBe(2))
  })
})

test('to see if strike, ball, foul, hit, Out are there', () => {
  it('sees if strike is on there', () => {
    const {getByText} = render(<App />)

    getByText(/strike/i);
  })
})