import logo from './logo.svg';
import './App.css';
import Message from './message'
import Classy from './classy'
import React from 'react'


class App extends React.Component{
  
  // let firstValue: string = "llama"
  // let firstValue: number = 321
  // let firstValue: boolean = false
  // let firstValue: number[] = [2,3,124]
  // let firstValue: Array<string> = ["2","bob","124"]
render(){
  let aTuple: [string, number] = ["la", 12];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {aTuple[1]} is of {typeof aTuple[1]} type!
        </p>
        <Message />
        <Classy />
      </header>
    </div>
  );}
}

export default App;
