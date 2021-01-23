import logo from './logo.svg';
import './App.css';
import Message from './message'
import Classy from './classy'
function App() {
  // let firstValue: string = "llama"
  // let firstValue: number = 321
  // let firstValue: boolean = false
  // let firstValue: number[] = [2,3,124]
  // let firstValue: Array<string> = ["2","bob","124"]

  let aTuple: [string, number] = ["la", 12];

  enum Codes {first = 1, second = 2};

  const warning = ():void => {
    console.log("Warning")
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {aTuple[1]} is of {typeof aTuple[1]} type!
        </p>
        <Message name="LLama!" message="This is a prop message" />
        <Classy />
      </header>
    </div>
  );
}

export default App;
