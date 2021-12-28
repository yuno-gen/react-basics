import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/Welcome'
import Hello from './component/Hello';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
         <code>Hello World!</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
        <Greet name="Clark" heroName="Superman"/>
        <Greet name="Bruce" heroName="Batman"/>
        <Greet name="Diana" heroName="Wonder Man"/>
        <Welcome name="tony" heroName="Iron Man"></Welcome>
        <Hello></Hello>
      </header>
    </div>
  );
}

export default App;
